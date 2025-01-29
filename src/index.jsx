import "./style.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <>
    <Canvas
      camera={{
        fov: 45,
        near: 0.4,
        far: 1000,
        position: [3, 2, 6],
      }}
    >
      <Experience />
    </Canvas>
  </>
);
