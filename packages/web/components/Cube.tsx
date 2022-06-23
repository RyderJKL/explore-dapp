import { useEffect, useRef } from "react";
import * as claygl from "claygl";
import { Mesh, light, camera } from "claygl";
const { Orthographic, Perspective } = camera;
const { Directional } = light;

let app = null;

export const Cube = () => {
  const box = useRef<HTMLDivElement>(null);

  const initClay = (containerDom?: HTMLElement) => {
    console.log(app, 'app')

    if (!containerDom) return;
    if (app) return;

    let camera: typeof Orthographic | typeof Perspective;
    let cube: Mesh;
    let mainLight: typeof Directional;

    app = claygl.application.create(containerDom, {
      width: containerDom.getBoundingClientRect().width,
      height: containerDom.getBoundingClientRect().height,

      init(app) {
        // Create camera
        camera = app.createCamera([0, 2, 5], [0, 0, 0]);

        // Create a RED cube
        cube = app.createCube({
          color: "red",
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

  return <div id="cube" ref={box} style={{width: 400, height: 400}}/>;
};

export default Cube;
