import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { Box, Heading } from "@chakra-ui/react";
import Cube from "../components/Cube";

import styled from "@emotion/styled";

const MapTaklksComponent = dynamic(() => import("../components/Maptalk"), {
  ssr: false,
});

export const Maptalk: NextPage = () => {
  return (
    <Box>
      <Heading>Maptalk</Heading>
      <MapTaklksComponent />
      <Cube></Cube>
    </Box>
  );
};

export default Maptalk;
