import dynamic from "next/dynamic";

const TVChartContainer = dynamic(() => import("../TVChartContainer"), {
  ssr: false,
});

export const TradingView = () => {
  return (
    <div className="TradingView">
      <TVChartContainer />
    </div>
  );
};

export default TradingView;
