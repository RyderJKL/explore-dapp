import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { Box, Heading } from "@chakra-ui/react";
// import LittleCity from "../components/LittleCity";

const LittleCityDynamic = dynamic(() => import("../components/LittleCity"), {
  ssr: false,
});

export const LittleBigCity: NextPage = () => {
  return (
    <Box>
      <Heading>LittleBigCity</Heading>
      <LittleCityDynamic />
    </Box>
  );
};

export default LittleBigCity;
