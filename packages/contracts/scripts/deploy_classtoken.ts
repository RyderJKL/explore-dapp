import { ethers } from 'hardhat';

const main = async () => {
    const initialSupply = ethers.utils.parseEther('10000.0');
    const ClassToken = await ethers.getContractFactory('ClassToken');
    const token = await ClassToken.deploy(initialSupply);
    await token.deployed();

    console.log('ClassToken deployed to:', token.address);
}

main().catch((error) => {
    console.log(error);
    process.exitCode = 1;
});