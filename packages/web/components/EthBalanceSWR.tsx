import { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { Box, Text, Heading } from "@chakra-ui/react";
import { formatEther } from "@ethersproject/units";
import useSWR from "swr";

const fetcher =
  (library: any) =>
  (...args: any[]) => {
    const [method, ...params] = args;
    return library[method](...params);
  };

export const EthBalanceSWR = () => {
  const { account, active, library, chainId, deactivate, activate } =
    useWeb3React<Web3Provider>();

  const { data: balance, mutate } = useSWR(["getBalance", account, "latest"], {
    fetcher: fetcher(library),
  });

  useEffect(() => {
    if (!library) return;
    console.log("listening for blocks...");
    library.on("block", () => {
      console.log("update balance...");
      mutate(undefined, true);
    });

    return () => {
      library.removeAllListeners("block");
    };
  });

  return (
    <Box>
        <Heading as='h5'>ETH Balance SWR</Heading>
      {active && balance ? (
        <Box>
          <Text fontSize={"md"} w="100%" my="2" align={"left"}>
            ETH in account: {parseFloat(formatEther(balance)).toFixed(3)}
            {chainId === 1337 && " Test"} ETH.
          </Text>
        </Box>
      ) : (
        "Nothing."
      )}
    </Box>
  );
};


export default EthBalanceSWR;