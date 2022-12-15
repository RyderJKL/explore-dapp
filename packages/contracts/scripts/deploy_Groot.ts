import { ethers } from "hardhat";

async function main() {
  const Groot = await ethers.getContractFactory("Groot");
  const groot = await Groot.deploy("Groot", "MyGroot");
  await groot.deployed();
  console.log("ERC20 deployed successfully, address", groot.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
