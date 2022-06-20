import { useState, useEffect } from "react";

import type { NextPage } from "next";
import { ethers } from "ethers";

import { Button, Heading, VStack, Box, Text } from "@chakra-ui/react";

declare let window: any;

const Home: NextPage = () => {
  const [balance, setBalance] = useState<string | undefined>();
  const [currentAccount, setCurrentAccount] = useState<string | undefined>();
  const [chainId, setChainId] = useState<number | undefined>();
  const [chainName, setChainName] = useState<string | undefined>();

  const onClickDisconnect = () => {
    
  }

  const onClickConnect = () => {

  }

  useEffect(() => {
    const loader = async () => {
      if (!currentAccount || !ethers.utils.isAddress(currentAccount)) return;
      if (!window.ethereum) return;

      try {
        const provider = new ethers.providers.Web3Provider(
          window.ethereum,
          "any"
        );

        const balance = await provider.getBalance(currentAccount);
        setBalance(ethers.utils.formatEther(balance));

        const network = await provider.getNetwork();
        console.log(network, "network");

        setChainId(network.chainId);
        setChainName(network.name);
      } catch (e) {
        console.error(e);
      }
    };
    loader();
  }, [currentAccount]);

  return (
    <div>
      <Heading as="h3" my={4}>
        Explore Web3
      </Heading>
      <VStack>
        <Box w="100%" my={4}>
          {(currentAccount && (
            <Button type="button" w="100%" onClick={onClickDisconnect}>
              Account: {currentAccount}
            </Button>
          )) || (
            <Button type="button" w="100%" onClick={onClickConnect}>
              click to connect metamask
            </Button>
          )}
        </Box>

        {currentAccount && (
          <Box mb={0} p={4} w="100%" borderWidth={"1px"} borderRadius="lg">
            <Heading my={4} fontSize="xl">
              Account info:
            </Heading>
            <Text>Eth Balance: {balance}</Text>
            <Text>
              Chain Info: ChainId {chainId}, ChainName: {chainName}
            </Text>
          </Box>
        )}
      </VStack>
    </div>
  );
};

export default Home;
