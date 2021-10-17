import {ethers} from "hardhat";
import chai from "chai";
import { solidity } from "ethereum-waffle";
import { AnimalHouseGovernance, CreatorCollection } from "../typechain";
import { BigNumber } from "ethers";

chai.use(solidity);
const { expect } = chai;


describe("AnimalHouse Creator Collection Meta aspects", () => {

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

    describe("Disabled Collection Transfer", async () => {

        it("contract ownership transfer should be disabled", async () => {

            await expect(collectionContract.connect(creator).renounceOwnership())
                .to.be.reverted;
            await expect(collectionContract.connect(creator).transferOwnership(accounts[5].address))
                .to.be.reverted;
        });

    });

});