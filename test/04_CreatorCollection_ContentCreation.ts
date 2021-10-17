import {ethers} from "hardhat";
import chai from "chai";
import { solidity } from "ethereum-waffle";
import { AnimalHouseGovernance, CreatorCollection } from "../typechain";
import { BigNumber, ContractReceipt, ContractTransaction } from "ethers";
import { time } from "console";

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
    let socialTokenId: BigNumber;

    const name: string = "Homer Simpson";
    const description: string = "Sprinfields finest beer drinker.";
    const imgIpfsAddr: string = "0x0someaddressonipf";

    const dayInSeconds: number = 86400;


    before(async () => {
        accounts = await ethers.getSigners();
        owner = accounts[0];
        admin = accounts[1];
        wallet = accounts[2];
        creator = accounts[3];

        const contractFactory = await ethers.getContractFactory("AnimalHouseGovernance", owner);
        governanceContract = (await contractFactory.deploy(admin.address, wallet.address)) as AnimalHouseGovernance;
        await governanceContract.deployed();

        const collectionCosts: BigNumber = await governanceContract.creatorCollectionPrice();
        await governanceContract.connect(creator).createCollection({value: collectionCosts});
        const collectionAddress: string = await governanceContract.getCollectionByOwner(creator.address);
        collectionContract = (await ethers.getContractAt("CreatorCollection", collectionAddress)) as CreatorCollection;
    });

    describe("create content as NFT", async () => {

        it("valid content creation", async () => {

            const ipfsAddress: string = "0xsomeIpfsAddress";
            const dataType: number = 0;
            let contentCountBefore: BigNumber = (await collectionContract.contentCount());
            let contentId: BigNumber = contentCountBefore.add(1);

            let tx: ContractTransaction =  await collectionContract.connect(creator).createContent(ipfsAddress, dataType);
            let receipt: ContractReceipt = await tx.wait();
            let timestamp: number = (await ethers.provider.getBlock(receipt.blockNumber)).timestamp;
            
            // check event
            let event = receipt.events?.filter((x) => {return x.event == "NewNft"})[0];
            expect(event?.args?.creator).to.eq(collectionContract.address);
            expect(event?.args?.contentId).to.eq(contentId);
            expect(event?.args?.timestamp).to.eq(timestamp);
            expect(event?.args?.dataType).to.eq(dataType);
            expect(event?.args?.ipfsAddress).to.eq(ipfsAddress);

            // check content
            let content: any = await collectionContract.getContent(contentId);
            let contentOwner: string = content[0];
            let contentDataType: number = content[1];
            let contentTimestamp: BigNumber = content[2];
            let contentValue: BigNumber = content[3];
            let contentIpfsAddress: string = content[4];

            expect(contentOwner).to.eq(collectionContract.address);
            expect(contentDataType).to.eq(dataType);
            expect(contentTimestamp).to.eq(timestamp);
            expect(contentValue).to.eq(ethers.utils.parseEther("1"));
            expect(contentIpfsAddress).to.eq(ipfsAddress);

            // check initial auction setup
            let auction: any = await collectionContract.getAuctionStatus(contentId);
            let auctionEndTimestamp: BigNumber = auction[0];
            let auctionMaxBid: BigNumber = auction[1];
            let auctionBidCounter: BigNumber = auction[2];
            let auctionMaxBidder: string = auction[3];

            expect(auctionEndTimestamp).to.eq(0);
            expect(auctionMaxBid).to.eq(ethers.utils.parseEther("1"));
            expect(auctionBidCounter).to.eq(0);
            expect(auctionMaxBidder).to.eq(ethers.constants.AddressZero);

            // check collection metadata
            expect(await collectionContract.contentCount()).to.eq(contentCountBefore.add(1));
        });

        it("invalid content creation (cannot use IPFS address twice)", async() => {

            const ipfsAddress: string = "0xsomeOtherIpfsAddress";
            const dataType: number = 0;
            await collectionContract.connect(creator).createContent(ipfsAddress, dataType);

            await expect(collectionContract.connect(creator).createContent(ipfsAddress, dataType))
                .to.be.reverted;
        });



    });


});