// @ts-nocheck
import { ethers } from "hardhat";
import { expect } from "chai";
import { Contract, SignerWithAddress } from 'ethers';

describe("GDTToken contrat", () => {
  const totalSupply = 10e8;
  let Token;
  let hardhatToken: Contract;
  let owner: ReturnType<typeof ethers.getSigners>;
  let addr1: ReturnType<typeof ethers.getSigners>;
  let addr2: ReturnType<typeof ethers.getSigners>;

  beforeEach(async () => {
    Token = await ethers.getContractFactory("GDTToken");
    [owner, addr1, addr2] = await ethers.getSigners();

    hardhatToken = await Token.deploy(totalSupply);
  });

  describe("Deployment", () => {
    it("Should assign the total supply of tokens to the ower", async () => {
      const ownerBalance = await hardhatToken.balanceOf(owner?.address);
      expect(await hardhatToken.totalSupply()).to.eq(ownerBalance);
    });
  });

  describe("Transactions", () => {
    it("Should transfer tokens between accounts", async () => {
      // Transfer 50 tokens to addr1
      await hardhatToken.transfer(addr1.address, 50);

      // get addr1 balance
      const addr1Balance = await hardhatToken.balanceOf(addr1.address);
      expect(addr1Balance).to.equal(50);

      // Transfer 50 tokens from addr1 to addr2
      await hardhatToken.connect(addr1).transfer(addr2.address, 50);
      const addr2Balance = await hardhatToken.balanceOf(addr2.address);
      expect(addr2Balance).to.equal(50);
    });

    // it("Should fail if sender don't have enough tokens", async () => {
    //   const initialOwnerBalance = await hardhatToken.balanceOf(owner.address);

    //   await expect(
    //     hardhatToken.connect(addr1).transfer(owner.address, 1)
    //   ).to.be.revertedWith("Not enough tokens");

    //   expect(await hardhatToken.balanceOf(owner.address)).to.equal(
    //     initialOwnerBalance
    //   );
    // });
  });
});
