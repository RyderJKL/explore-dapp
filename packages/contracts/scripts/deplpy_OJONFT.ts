import hre from "hardhat";

const main = async () => {
  try {
    const start = new Date().getTime();
    const OJONFT = await hre.ethers.getContractFactory("OJONFT");
    console.log("Deploying OJONFT...");
    const ojoNft = await OJONFT.deploy("ojo-nft", "ojo");
    await ojoNft.deployed();

    console.log("OJONFT deployed to:", ojoNft.address);
    console.log("ojo name:", await ojoNft.name());
    console.log("ojo name:", await ojoNft.name());

    const end = new Date().getTime();
    const diff = end - start;
    console.log("Took tiems:", diff);
  } catch (e) {
    console.error(e);
    process.exitCode=1
  }
};

main()
  .then(() => { process.exitCode = 0 })
  .catch((e) => {
    process.exitCode = 1;
  });
