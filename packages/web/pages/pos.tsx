import { NextPage } from "next";
import { useRef } from "react";
export interface Position {
  x: number;
  y: number;
}

const oRT: Position = { x: 0, y: 0 };
const radius = 2;

export const Post: NextPage = () => {
  const canvasEle = useRef<HTMLCanvasElement>(null);

  return (
    <div>
      <canvas ref={canvasEle} />
    </div>
  );
};

export default Post;
