import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../network";
import { ChakraProvider } from "@chakra-ui/react";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { useEffect } from "react";

const getLibrary = (provider: any): Web3Provider => new Web3Provider(provider);

// declare  window {
//   _AMapSecurityConfig: {
//     securityJsCode: string;
//   }
// }
declare let window: any;

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // if (typeof window !== "undefined") {
    //   window._AMapSecurityConfig = {
    //     securityJsCode: "51c4a7e5999ea53f6d4830a87b862feb",
    //   };
    // }
  }, []);

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
