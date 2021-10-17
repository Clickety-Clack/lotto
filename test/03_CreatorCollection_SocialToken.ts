import {ethers} from "hardhat";
import chai from "chai";
import { solidity } from "ethereum-waffle";
import { AnimalHouseGovernance, CreatorCollection } from "../typechain";
import { BigNumber } from "ethers";

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

        /* check social token supply & balance */
        socialTokenId = await collectionContract.SOCIAL_TOKEN_ID();
        expect(await collectionContract.socialTokenTotalSupply()).to.eq(ethers.utils.parseEther("1000000"));
        expect(await collectionContract.socialTokenMaxSupply()).to.eq(ethers.utils.parseEther("2000008"));
        expect(await collectionContract.socialTokenHolders()).to.eq(1);

    });

    describe("purchase social token", async () => {

        it("valid purchase", async () => {

            const customer: any = accounts[4]; 
            const customerBalanceBefore: BigNumber = await ethers.provider.getBalance(customer.address);
            const customerTokenBalanceBefore: BigNumber = await collectionContract.balanceOf(customer.address, socialTokenId);

            const totalTokenBefore: BigNumber = await collectionContract.socialTokenTotalSupply();
            const tokenHoldersBefore: BigNumber = await collectionContract.socialTokenHolders();

            const purchaseAmount: BigNumber = ethers.utils.parseEther("10");
            await collectionContract.connect(customer).purchaseSocialToken({value: purchaseAmount});

            const customerBalanceAfter: BigNumber = await ethers.provider.getBalance(customer.address);
            expect(customerBalanceAfter).to.lte(customerBalanceBefore.sub(purchaseAmount));

            const customerTokenBalanceAfter: BigNumber = await collectionContract.balanceOf(customer.address, socialTokenId);
            expect(customerTokenBalanceAfter).to.eq(customerTokenBalanceBefore.add(purchaseAmount));

            const totalTokenAfter: BigNumber = await collectionContract.socialTokenTotalSupply();
            const tokenHoldersAfter: BigNumber = await collectionContract.socialTokenHolders();
            expect(totalTokenAfter).to.eq(totalTokenBefore.add(ethers.utils.parseEther("10")));
            expect(await collectionContract.socialTokenMaxSupply()).to.eq(ethers.utils.parseEther("2000008"));
            expect(tokenHoldersAfter).to.eq(tokenHoldersBefore.add(1));
            expect(await collectionContract.socialTokenAvailableToMint()).to.eq(ethers.utils.parseEther("999998"));
        });

        it("fallback purchase test", async() => {

            const customer: any = accounts[4]; 
            const customerBalanceBefore: BigNumber = await ethers.provider.getBalance(customer.address);
            const customerTokenBalanceBefore: BigNumber = await collectionContract.balanceOf(customer.address, socialTokenId);
            const tokenHoldersBefore: BigNumber = await collectionContract.socialTokenHolders();

            const purchaseAmount: BigNumber = ethers.utils.parseEther("10");
            await customer.sendTransaction({to: collectionContract.address, value: purchaseAmount});

            const customerBalanceAfter: BigNumber = await ethers.provider.getBalance(customer.address);
            expect(customerBalanceAfter).to.lte(customerBalanceBefore.sub(purchaseAmount));

            const customerTokenBalanceAfter: BigNumber = await collectionContract.balanceOf(customer.address, socialTokenId);
            expect(customerTokenBalanceAfter).to.eq(customerTokenBalanceBefore.add(purchaseAmount));

            expect(await collectionContract.socialTokenTotalSupply()).to.eq(ethers.utils.parseEther("1000020"));
            expect(await collectionContract.socialTokenMaxSupply()).to.eq(ethers.utils.parseEther("2000008"));

            const tokenHoldersAfter: BigNumber = await collectionContract.socialTokenHolders();
            expect(tokenHoldersAfter).to.eq(tokenHoldersBefore);

        });

        it("holders counter", async () => {
            const tokenHoldersBeginning: BigNumber = await collectionContract.socialTokenHolders();
            const purchaseAmount: BigNumber = ethers.utils.parseEther("10");

            await collectionContract.connect(accounts[5]).purchaseSocialToken({value: purchaseAmount});
            await collectionContract.connect(accounts[6]).purchaseSocialToken({value: purchaseAmount});

            const tokenHoldersStep1: BigNumber = await collectionContract.socialTokenHolders();
            expect(tokenHoldersStep1).to.eq(tokenHoldersBeginning.add("2"));

            await collectionContract.connect(accounts[5]).purchaseSocialToken({value: purchaseAmount});

            const tokenHoldersStep2: BigNumber = await collectionContract.socialTokenHolders();
            expect(tokenHoldersStep2).to.eq(tokenHoldersStep1);

            await collectionContract.connect(accounts[5]).safeTransferFrom(accounts[5].address, 
                                                                            accounts[7].address,
                                                                            socialTokenId,
                                                                            purchaseAmount,
                                                                            ethers.utils.formatBytes32String(""));
                                    
            const tokenHoldersStep3: BigNumber = await collectionContract.socialTokenHolders();
            expect(tokenHoldersStep3).to.eq(tokenHoldersStep2.add("1"));

            await collectionContract.connect(accounts[7]).safeTransferFrom(accounts[7].address, 
                                                                            accounts[5].address,
                                                                            socialTokenId,
                                                                            purchaseAmount,
                                                                            ethers.utils.formatBytes32String(""));

            const tokenHoldersStep4: BigNumber = await collectionContract.socialTokenHolders();
            expect(tokenHoldersStep4).to.eq(tokenHoldersStep3.sub("1"));

        });

        it("withdraw funding", async() => {

            const collectionBalanceBefore: BigNumber = await ethers.provider.getBalance(collectionContract.address);
            const creatorBalanceBefore: BigNumber = await ethers.provider.getBalance(creator.address);
            expect(collectionBalanceBefore).gt("0");

            await collectionContract.connect(creator).withdrawToWallet();

            const collectionBalanceAfter: BigNumber = await ethers.provider.getBalance(collectionContract.address);
            const creatorBalanceAfter: BigNumber = await ethers.provider.getBalance(creator.address);

            expect(collectionBalanceAfter).to.eq("0");
            expect(creatorBalanceAfter).to.gt(creatorBalanceBefore); // we cannot calculate exactly because of gas
        });

    });

    describe("time based minting", async() => {

        it("monthly minting increase", async() => {

            const initialMaxSupply: BigNumber = ethers.utils.parseEther("2000008");
            const monthlyIncrease: BigNumber = ethers.utils.parseEther("222222");
            const totalSupplyBefore: BigNumber = await collectionContract.socialTokenTotalSupply();
            expect(await collectionContract.socialTokenMaxSupply()).to.eq(initialMaxSupply);

            // wait for 1 month
            await ethers.provider.send("evm_increaseTime",[dayInSeconds*30]);
            await ethers.provider.send("evm_mine", []);

            await collectionContract.connect(accounts[5]).safeTransferFrom(accounts[5].address, 
                accounts[5].address,
                socialTokenId,
                0,
                ethers.utils.formatBytes32String(""));

            expect(await collectionContract.socialTokenMaxSupply()).to.eq(initialMaxSupply.add(monthlyIncrease));
            expect(await collectionContract.socialTokenTotalSupply()).to.eq(totalSupplyBefore);

        });

        it("mint until max tokens reached (3 years)", async() => {
            
            // wait for 3 years - we need to do it in a loop per month to avoid out-of-gas problems
            for(let i: number = 0; i < 36; i++){
                await ethers.provider.send("evm_increaseTime",[dayInSeconds*30]);
                await ethers.provider.send("evm_mine", []);

                await collectionContract.connect(accounts[5]).safeTransferFrom(accounts[5].address, 
                    accounts[5].address,
                    socialTokenId,
                    0,
                    ethers.utils.formatBytes32String(""));
            }

            const maxTokenSupply: BigNumber = ethers.utils.parseEther("10000000");
            expect(await collectionContract.socialTokenMaxSupply()).to.eq(maxTokenSupply);        
        });

        it("mint does not exceed max tokens", async() => {

            await ethers.provider.send("evm_increaseTime",[dayInSeconds*30]);
            await ethers.provider.send("evm_mine", []);

            await collectionContract.connect(accounts[5]).safeTransferFrom(accounts[5].address, 
                accounts[5].address,
                socialTokenId,
                0,
                ethers.utils.formatBytes32String(""));
            
            const maxTokenSupply: BigNumber = ethers.utils.parseEther("10000000");
            expect(await collectionContract.socialTokenMaxSupply()).to.eq(maxTokenSupply);    

        });

    });


});