
import type { NextPage } from "next";
import Script from "next/script";
import TradingViewContainer from "../components/TradingView";

export const TradingViewPage: NextPage = () => {
  return (
    <div className="trading-view-page">
      <Script
        src="/static/datafeeds/udf/dist/bundle.js"
        strategy="beforeInteractive"
      />
      <TradingViewContainer />
    </div>
  );
};

export default TradingViewPage;
