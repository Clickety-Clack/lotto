import {ethers} from "hardhat";
import chai from "chai";
import { solidity } from "ethereum-waffle";
import { AnimalHouseGovernance, CreatorCollection } from "../typechain";
import { BigNumber } from "ethers";

chai.use(solidity);
const { expect } = chai;


describe("AnimalHouse Governance Contract", () => {

    let governanceContract: AnimalHouseGovernance;
    let accounts: any;
    let owner: any;
    let admin: any;
    let wallet: any;

    const name: string = "Homer Simpson";
    const description: string = "Sprinfields finest beer drinker.";
    const imgIpfsAddr: string = "0x0someaddressonipf";

    before(async () => {
        accounts = await ethers.getSigners();
        owner = accounts[0];
        admin = accounts[1];
        wallet = accounts[2];
        const contractFactory = await ethers.getContractFactory("AnimalHouseGovernance", owner);
        governanceContract = (await contractFactory.deploy(admin.address, wallet.address)) as AnimalHouseGovernance;
        await governanceContract.deployed();

        expect(await governanceContract.owner()).to.eq(owner.address);
        expect(await governanceContract.admin()).to.eq(admin.address);
        expect(await governanceContract.connect(owner).wallet()).to.eq(wallet.address);


    });

    describe("collection creation", async () => {

        it("valid collection creation", async () => {

            const creator: any = accounts[3]; 
            const governanceBalanceBefore: BigNumber = await ethers.provider.getBalance(governanceContract.address);
            const creatorBalanceBefore: BigNumber = await ethers.provider.getBalance(creator.address);

            const collectionCosts: BigNumber = await governanceContract.creatorCollectionPrice();

            await expect(governanceContract.connect(creator).createCollection({value: collectionCosts})
                        )
                        .to.emit(governanceContract, "NewCollection");
            
            // check balances
            const governanceBalanceAfter: BigNumber = await ethers.provider.getBalance(governanceContract.address);
            const creatorBalanceAfter: BigNumber = await ethers.provider.getBalance(creator.address);

            expect(governanceBalanceAfter).to.eq(governanceBalanceBefore.add(collectionCosts));
            expect(creatorBalanceAfter).to.lte(creatorBalanceBefore.sub(collectionCosts));

            // check governance fields
            const collectionAddress: string = await governanceContract.getCollectionByOwner(creator.address);
            expect(collectionAddress).to.not.eq(ethers.constants.AddressZero);
            expect(await governanceContract.isAnimalHouseCollection(collectionAddress)).to.be.true;

            // check collection metadata
            const collectionContract: CreatorCollection = (await ethers.getContractAt(
                                                                    "CreatorCollection", 
                                                                    collectionAddress)) as CreatorCollection;
            
            expect(await collectionContract.owner()).to.eq(creator.address);
            expect(await collectionContract.socialTokenTotalSupply()).to.eq(ethers.utils.parseEther("1000000"));
            expect(await collectionContract.balanceOf(creator.address, 0)).to.eq(ethers.utils.parseEther("1000000"));
            expect(await collectionContract.socialTokenHolders()).to.eq(1);
        });

        it("invalid collection creation (owner cannot have two collections)", async () => {
        
            const creator: any = accounts[3]; 
            const collectionCosts: BigNumber = await governanceContract.creatorCollectionPrice();

            await expect(governanceContract.connect(creator).createCollection({value: collectionCosts}))
                    .to.be.reverted;
        });

        it("invalid collection creation (insufficient funds)", async () => {
        
            const creator: any = accounts[3]; 
            const collectionCosts: BigNumber = await governanceContract.creatorCollectionPrice();

            await expect(governanceContract.connect(creator).createCollection({value: collectionCosts.sub(1)})
            )
            .to.be.reverted;
        });
    });


    describe("withdraw fundings", async() => {

        it("withdraw to wallet", async() => {
            const governanceBalanceBefore: BigNumber = await ethers.provider.getBalance(governanceContract.address);
            const walletBalanceBefore: BigNumber = await ethers.provider.getBalance(wallet.address);

            await governanceContract.connect(owner).withdrawToWallet();
            
            const governanceBalanceAfter: BigNumber = await ethers.provider.getBalance(governanceContract.address);
            const walletBalanceAfter: BigNumber = await ethers.provider.getBalance(wallet.address);

            expect(governanceBalanceAfter).to.eq(0);
            expect(walletBalanceAfter).to.eq(walletBalanceBefore.add(governanceBalanceBefore));
            

        });

    });


});