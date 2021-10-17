import {ethers} from "hardhat";
import chai from "chai";
import { solidity } from "ethereum-waffle";
import { AnimalHouseGovernance, CreatorCollection } from "../typechain";
import { BigNumber, ContractReceipt, ContractTransaction } from "ethers";
import {parseEther, formatEther} from "ethers/lib/utils"
import { clearLine } from "readline";

chai.use(solidity);
const { expect } = chai;


describe("AnimalHouse Creator Collection SocialToken aspects", () => {

    let governanceContract: AnimalHouseGovernance;
    let collectionContract: CreatorCollection;
    let accounts: any;
    let owner: any;
    let admin: any;
    let wallet: any;
    let creator: any;
    let bidder1: any;
    let bidder2: any;
    let bidder3: any;
    let contentId: BigNumber;

    const name: string = "Homer Simpson";
    const description: string = "Sprinfields finest beer drinker.";
    const imgIpfsAddr: string = "0x0someaddressonipf";
    let auctionTimestamp: number;

    const dayInSeconds: number = 86400;

    const checkAuction = async(id: number, timestamp: number, maxBid: BigNumber, counter: number, maxBidder: string) => {
        let auction: any = await collectionContract.getAuctionStatus(id);
        let auctionEndTimestamp: BigNumber = auction[0];
        let auctionMaxBid: BigNumber = auction[1];
        let auctionBidCounter: BigNumber = auction[2];
        let auctionMaxBidder: string = auction[3];

        expect(auctionEndTimestamp).to.eq(timestamp);
        expect(auctionMaxBid).to.eq(maxBid);
        expect(auctionBidCounter).to.eq(counter);
        expect(auctionMaxBidder).to.eq(maxBidder);
    }


    before(async () => {
        accounts = await ethers.getSigners();
        owner = accounts[0];
        admin = accounts[1];
        wallet = accounts[2];
        creator = accounts[3];
        bidder1 = accounts[4];
        bidder2 = accounts[5];
        bidder3 = accounts[6];


        const contractFactory = await ethers.getContractFactory("AnimalHouseGovernance", owner);
        governanceContract = (await contractFactory.deploy(admin.address, wallet.address)) as AnimalHouseGovernance;
        await governanceContract.deployed();

        const collectionCosts: BigNumber = await governanceContract.creatorCollectionPrice();
        await governanceContract.connect(creator).createCollection({value: collectionCosts});
        const collectionAddress: string = await governanceContract.getCollectionByOwner(creator.address);
        collectionContract = (await ethers.getContractAt("CreatorCollection", collectionAddress)) as CreatorCollection;

        //setup bidder
        await collectionContract.connect(bidder1).purchaseSocialToken({value: parseEther("100")});
        await collectionContract.connect(bidder2).purchaseSocialToken({value: parseEther("100")});
        await collectionContract.connect(bidder3).purchaseSocialToken({value: parseEther("200")});

        //create content
        const ipfsAddress: string = "0xsomeIpfsAddress";
        const dataType: number = 0;
        let contentCountBefore: BigNumber = (await collectionContract.contentCount());
        contentId = contentCountBefore.add(1);
        await collectionContract.connect(creator).createContent(ipfsAddress, dataType);

    });

    describe("Auction System", async () => {

        it("1. bid - initial bid (valid)", async () => {

            const collectionBalanceBefore: BigNumber = await ethers.provider.getBalance(collectionContract.address);
            const bidder1BalanceBefore: BigNumber = await ethers.provider.getBalance(bidder1.address);
            const governanceBalanceBefore: BigNumber = await ethers.provider.getBalance(governanceContract.address);

            let tx: ContractTransaction = await collectionContract.connect(bidder1).bidOnContent(contentId, {value: parseEther("1")});
            let receipt: ContractReceipt = await tx.wait();
            auctionTimestamp = (await ethers.provider.getBlock(receipt.blockNumber)).timestamp;

            const collectionBalanceAfter: BigNumber = await ethers.provider.getBalance(collectionContract.address);
            const bidder1BalanceAfter: BigNumber = await ethers.provider.getBalance(bidder1.address);
            const governanceBalanceAfter: BigNumber = await ethers.provider.getBalance(governanceContract.address);

            expect(collectionBalanceAfter).to.eq(collectionBalanceBefore.add(parseEther("0.95")));
            expect(bidder1BalanceAfter).to.lte(bidder1BalanceBefore.sub(parseEther("1")));
            expect(governanceBalanceAfter).to.eq(governanceBalanceBefore.add(parseEther("0.05")));
            
            // check auction data 
            await checkAuction(contentId.toNumber(), (auctionTimestamp + dayInSeconds * 2), parseEther("1"), 1, bidder1.address);

            // owner should be still the collection
            let content: any = await collectionContract.getContent(contentId);
            let contentOwner: string = content[0];
            expect(contentOwner).to.eq(collectionContract.address);

            // normal transfer does not work until auction is over
            await expect(collectionContract.connect(bidder1).safeTransferFrom(bidder1.address, 
                                                                            bidder2.address, 
                                                                            contentId, 
                                                                            1, 
                                                                            ethers.utils.formatBytes32String("")))
                    .to.be.reverted;  
        });

        it("2. bid (valid/invalid - first attempt is invalid)", async() => {

            // first attempt will be invalid. same token amount as current holder. therefore the bid must be doubled.
            await expect(collectionContract.connect(bidder2).bidOnContent(contentId, {value: parseEther("1.5")}))
                .to.be.reverted;

            // second attempt, correct coin amount 
            const collectionBalanceBefore: BigNumber = await ethers.provider.getBalance(collectionContract.address);
            const bidder1BalanceBefore: BigNumber = await ethers.provider.getBalance(bidder1.address);
            const bidder2BalanceBefore: BigNumber = await ethers.provider.getBalance(bidder2.address);
            const governanceBalanceBefore: BigNumber = await ethers.provider.getBalance(governanceContract.address);

            await collectionContract.connect(bidder2).bidOnContent(contentId, {value: parseEther("2")});

            const collectionBalanceAfter: BigNumber = await ethers.provider.getBalance(collectionContract.address);
            const bidder1BalanceAfter: BigNumber = await ethers.provider.getBalance(bidder1.address);
            const bidder2BalanceAfter: BigNumber = await ethers.provider.getBalance(bidder2.address);
            const governanceBalanceAfter: BigNumber = await ethers.provider.getBalance(governanceContract.address);

            expect(collectionBalanceAfter).to.eq(collectionBalanceBefore.add(parseEther("0.95")));
            expect(bidder1BalanceAfter).to.eq(bidder1BalanceBefore.add(parseEther("1")));
            expect(bidder2BalanceAfter).to.lte(bidder2BalanceBefore.sub(parseEther("2")));
            expect(governanceBalanceAfter).to.eq(governanceBalanceBefore.add(parseEther("0.05")));

            await checkAuction(contentId.toNumber(), (auctionTimestamp + dayInSeconds * 2), parseEther("2"), 2, bidder2.address);
        });

        it("3. bid (invalid - no social tokens)", async() => {

            await expect(collectionContract.connect(accounts[10].address).bidOnContent(contentId, {value: parseEther("100")}))
            .to.be.reverted;
        });

        it("4. bid (bidder has more social tokens than highest bidder)", async() => {

            const collectionBalanceBefore: BigNumber = await ethers.provider.getBalance(collectionContract.address);
            const bidder2BalanceBefore: BigNumber = await ethers.provider.getBalance(bidder2.address);
            const bidder3BalanceBefore: BigNumber = await ethers.provider.getBalance(bidder3.address);
            const governanceBalanceBefore: BigNumber = await ethers.provider.getBalance(governanceContract.address);

            await collectionContract.connect(bidder3).bidOnContent(contentId, {value: parseEther("2")});

            const collectionBalanceAfter: BigNumber = await ethers.provider.getBalance(collectionContract.address);
            const bidder2BalanceAfter: BigNumber = await ethers.provider.getBalance(bidder2.address);
            const bidder3BalanceAfter: BigNumber = await ethers.provider.getBalance(bidder3.address);
            const governanceBalanceAfter: BigNumber = await ethers.provider.getBalance(governanceContract.address);

            expect(collectionBalanceAfter).to.eq(collectionBalanceBefore);
            expect(bidder2BalanceAfter).to.eq(bidder2BalanceBefore.add(parseEther("2")));
            expect(bidder3BalanceAfter).to.lte(bidder3BalanceBefore.sub(parseEther("2")));
            expect(governanceBalanceAfter).to.eq(governanceBalanceBefore);

            await checkAuction(contentId.toNumber(), (auctionTimestamp + dayInSeconds * 2), parseEther("2"), 3, bidder3.address);
        });

        it("5. bid (valid, standard bid)", async() => {
        
            const collectionBalanceBefore: BigNumber = await ethers.provider.getBalance(collectionContract.address);
            const bidder1BalanceBefore: BigNumber = await ethers.provider.getBalance(bidder1.address);
            const bidder3BalanceBefore: BigNumber = await ethers.provider.getBalance(bidder3.address);
            const governanceBalanceBefore: BigNumber = await ethers.provider.getBalance(governanceContract.address);

            await collectionContract.connect(bidder1).bidOnContent(contentId, {value: parseEther("4")});

            const collectionBalanceAfter: BigNumber = await ethers.provider.getBalance(collectionContract.address);
            const bidder1BalanceAfter: BigNumber = await ethers.provider.getBalance(bidder1.address);
            const bidder3BalanceAfter: BigNumber = await ethers.provider.getBalance(bidder3.address);
            const governanceBalanceAfter: BigNumber = await ethers.provider.getBalance(governanceContract.address);

            expect(collectionBalanceAfter).to.eq(collectionBalanceBefore.add(parseEther("1.9")));
            expect(bidder1BalanceAfter).to.lte(bidder1BalanceBefore.sub(parseEther("4")));
            expect(bidder3BalanceAfter).to.eq(bidder3BalanceBefore.add(parseEther("2")));
            expect(governanceBalanceAfter).to.eq(governanceBalanceBefore.add(parseEther("0.1")));

            await checkAuction(contentId.toNumber(), (auctionTimestamp + dayInSeconds * 2), parseEther("4"), 4, bidder1.address);
        });

        it("end of auction", async() => {

            await ethers.provider.send("evm_increaseTime",[dayInSeconds*2]);
            await ethers.provider.send("evm_mine", []);

            // no more bidding possible
            await expect(collectionContract.connect(bidder2).bidOnContent(contentId, {value: parseEther("100")}))
                    .to.be.reverted;
            
            // auction winner is now owner
            let content: any = await collectionContract.getContent(contentId);
            let contentOwner: string = content[0];
            expect(contentOwner).to.eq(bidder1.address);

            // normal transfer works now
            await collectionContract.connect(bidder1).safeTransferFrom(bidder1.address, 
                                                                        bidder2.address, 
                                                                        contentId, 
                                                                        1, 
                                                                        ethers.utils.formatBytes32String(""));
                                                                    
            content = await collectionContract.getContent(contentId);
            contentOwner = content[0];
            expect(contentOwner).to.eq(bidder2.address);
        });
    });
});