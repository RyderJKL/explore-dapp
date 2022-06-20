import { expect } from "chai";
import { ethers } from "hardhat";

describe("ClassToken", () => {
  it("Should have the corrent initial supply", async () => {
    const initialSupply = ethers.utils.parseEther("1000000");
    const ClassToken = await ethers.getContractFactory("ClassToken");
    const token = await ClassToken.deploy(initialSupply);
    await token.deployed();

    expect(await token.totalSupply()).to.equal(initialSupply);
  });
});
