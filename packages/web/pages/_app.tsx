import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../network";
import { ChakraProvider } from "@chakra-ui/react";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

const getLibrary = (provider: any): Web3Provider => new Web3Provider(provider);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </Web3ReactProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
