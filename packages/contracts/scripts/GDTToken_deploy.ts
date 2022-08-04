import hre from "hardhat";
import { exit } from "process";

const main = async () => {
  try {
    const GDTToken = await hre.ethers.getContractFactory("GDTToken");
    console.log("Deploying GDTToken...");
    const token = await GDTToken.deploy(`${10e8}`);
    await token.deployed();
    console.log("GDTToken deployed to:", token.address);
    exit(0);
  } catch (e) {
    console.error(e);
    exit(1);
  }
};

main();
