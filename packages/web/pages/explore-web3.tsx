import { NextPage } from "next";

import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

import ConnectMetaMask from "../components/ConnectMetaMask";
import EthBalance from "../components/EthBalance";
import EthBalanceSWR from "../components/EthBalanceSWR";
import ReadERC20 from "../components/ReadERC20";

import { Box, Heading } from "@chakra-ui/react";

export const ExploreWeb3: NextPage = () => {
  const { account, chainId } = useWeb3React<Web3Provider>();

  return (
    <div>
      <ConnectMetaMask />
      <EthBalance />
      <EthBalanceSWR />
      <Box mb={0} p={4} w="100%" borderWidth="1px" borderRadius="lg">
        <Heading my={4} fontSize="xl">
          Read ClassToken Info
        </Heading>
        <ReadERC20 addressContract="" currentAccount={account} />
      </Box>
    </div>
  );
};

export default ExploreWeb3;
