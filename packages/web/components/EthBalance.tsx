import { useState, useEffect } from "react";

import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { formatEther } from "@ethersproject/units";
import { Text, Box } from "@chakra-ui/react";

export const EThBalance = () => {
  const [balance, setBalance] = useState<number | undefined>();
  const { account, active, library, chainId, deactivate, activate } =
    useWeb3React<Web3Provider>();

  console.log(active, account, "at eht balance");

  useEffect(() => {
    if (active && account) {
      library?.getBalance(account).then((balance) => {
        setBalance(Number(formatEther(balance)));
      });
    }
  }, [account, active, library]);

  return (
    <Box>
      {(active && (
        <Text fontSize={"md"} w="100%" my="2" align={"left"}>
          Eth in account: {balance?.toFixed(3)}{" "}
          {(chainId === 1337 && "Test") || ""} ETH.
        </Text>
      )) ||
        "Nothing."}
    </Box>
  );
};

export default EThBalance;
