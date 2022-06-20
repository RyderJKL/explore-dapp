import { useEffect, useRef } from "react";
import * as claygl from "claygl";
import { Mesh, light, camera } from "claygl";
const { Orthographic, Perspective } = camera;
const { Directional } = light;

export const Cube = () => {
  const box = useRef<HTMLDivElement>(null);

  const initClay = (containerDom?: HTMLElement) => {
    if (!containerDom) return;

    let camera: typeof Orthographic | typeof Perspective;
    let cube: Mesh;
    let mainLight: typeof Directional;

    claygl.application.create(containerDom, {
      width: 400,
      height: 400,
      init(app) {
        // Create camera
        camera = app.createCamera([0, 2, 5], [0, 0, 0]);

        // Create a RED cube
        cube = app.createCube({
          color: "#f00",
        });

        // Create light
        mainLight = app.createDirectionalLight([-1, -1, -1]);
      },
      loop(app) {
        cube.rotation.rotateY(app.frameTime / 1000);
      },
    });
  };

  useEffect(() => {
    box.current && initClay(box.current);
  }, [box.current]);

  return <div id="cube" ref={box} />;
};

export default Cube;
