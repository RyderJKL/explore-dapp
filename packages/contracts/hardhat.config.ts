import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";

import { ProxyAgent, setGlobalDispatcher } from "undici";
const proxyAgent = new ProxyAgent("http://127.0.0.1:6152");
setGlobalDispatcher(proxyAgent);

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: "0.8.1",
  defaultNetwork: "mumbai",
  networks: {
    arbitrum1: {
      url: process.env.PINKEBY_ARBITRUMB1,
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    arbitrum2: {
      url: process.env.PINKEBY_ARBITRUMB2,
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    goerli: {
      url: process.env.GOERLI_ALCHEMY,
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    rinkeby: {
      url: process.env.PINKEBY_ALCHEMY,
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    reposten: {
      url: process.env.REPOSTEN_ALCHEMY,
      accounts: [process.env.PRIVATE_KEY || ""],
    },
    // hardhat: {
    //   url: process.env.RINKEBY_ARBITRUM1,
    //   accounts: [process.env.PRIVKEY]
    // },
    mumbai: {
      url: process.env.ROPSTEN_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

export default config;
