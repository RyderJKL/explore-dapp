import { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { Button, Box, Text } from "@chakra-ui/react";
import { UserRejectedRequestError } from "@web3-react/injected-connector";
import { formatAddress, injected } from "../utils";

export const ConnectMetaMask = () => {
  const {
    chainId,
    account,
    activate,
    deactivate,
    setError,
    active,
    library,
    connector,
  } = useWeb3React<Web3Provider>();

  const onClickConnect = () => {
    activate(
      injected,
      (error) => {
        if (error instanceof UserRejectedRequestError) {
          console.log("User rejected request");
        } else {
          setError(error);
        }
      },
      false
    );
  };

  const onClickDisconnect = () => deactivate();

  useEffect(() => {
    console.log(
      "metamask connect successful",
      chainId,
      account,
      active,
      library,
      connector
    );
  });

  return (
    <div>
      {active && typeof account === "string" ? (
        <Box>
          <Button type="button" w="100%" onClick={onClickDisconnect}>
            Account: {formatAddress(account, 4)}
          </Button>
          <Text fontSize={"sm"} w="100%" my="2" align={"center"}>
            ChainId: {chainId} connected
          </Text>
        </Box>
      ) : (
        <Box>
          <Button type="button" w="100%" onClick={onClickConnect}>
            Connect Wallet
          </Button>
          <Text fontSize={"sm"} w="100%" my="2" align="center"></Text>
        </Box>
      )}
    </div>
  );
};

export default ConnectMetaMask;
