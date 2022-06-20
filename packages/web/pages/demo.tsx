import type { NextPage } from "next";
import { ReflexContainer, ReflexElement, ReflexSplitter } from "react-reflex";
import "react-reflex/styles.css";
import ConnectMetaMask from "../components/ConnectMetaMask";

export const Demo: NextPage = () => {
  return (
    <ReflexContainer
      orientation="horizontal"
      style={{ height: "800px", background: "pink" }}
    >
      <ReflexElement
        propagateDimensionsRate={200}
        propagateDimensions={true}
        flex={0.6}
        style={{ overflow: "hidden" }}
        minSize={200}
      >
        <div>top</div>
        <ConnectMetaMask />
      </ReflexElement>

      <ReflexSplitter>xxxxx</ReflexSplitter>

      <ReflexElement className="bottom-pane" minSize={100}>
        <div className="pane-content">
          <label>Bottom Pane</label>
        </div>
      </ReflexElement>
    </ReflexContainer>
  );
};

export default Demo;
