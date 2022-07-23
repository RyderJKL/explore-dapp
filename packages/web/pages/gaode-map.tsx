import { NextPage } from "next";
import dynamic from "next/dynamic";

const Amap = dynamic(() => import("../components/Amap"), { ssr: false });

export const GaodeMap: NextPage = () => {
  return (
    <div>
      <Amap />
    </div>
  );
};

export default GaodeMap;
