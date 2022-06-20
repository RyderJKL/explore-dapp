import { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import ClassTokenContract from "../../contracts/artifacts/contracts/ClassToken.sol/ClassToken.json";
import { ClassToken } from "../../contracts/typechain/ClassToken";
import { ethers } from "ethers";

export interface ERC20ReadProps {
  addressContract?: string;
  currentAccount?: string | null;
}

declare let window: any;

export const ERC20Read = (props: ERC20ReadProps) => {
  const { addressContract, currentAccount } = props;
  const [totalSupply, setTotalSupply] = useState("");
  const [symbol, setSymbol] = useState("");

  useEffect(() => {
    if (!window.ehtereum || !addressContract) return;

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const erc20 = new ethers.Contract(
      addressContract,
      ClassTokenContract.abi,
      provider
    ) as ClassToken;

    erc20
      .symbol()
      .then((symbol) => {
        setSymbol(symbol);
      })
      .catch((e) => {
        console.error(e);
      });

    erc20
      .totalSupply()
      .then((totalSupply) => {
        setTotalSupply(ethers.utils.formatEther(totalSupply));
      })
      .catch((e) => {
        console.error(e);
      });
  }, [currentAccount, addressContract]);

  return (
    <Box>
      <Text><b>Current Account</b>: {props.currentAccount}</Text>
      <Text><b>ERC20 Contract Address</b>: {props.addressContract}</Text>
      <Text><b>ClassToken TotalSupply</b>: {totalSupply} {symbol}</Text>
    </Box>
  );
};

export default ERC20Read;
