import { useThree, extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import CustomObject from "./CustomObject";
import {
  OrbitControls,
  TransformControls,
  PivotControls,
  Html,
} from "@react-three/drei";

export default function Experience() {
  const cubeRef = useRef();
  const sphereRef = useRef();
  const groupRef = useRef();

  //   const { camera, gl } = useThree();

  useFrame((state, delta) => {
    // const angle = state.clock.elapsedTime;
    // state.camera.position.x = Math.sin(angle) * 8;
    // state.camera.position.z = Math.cos(angle) * 8;
    // state.camera.lookAt(0, 0, 0);
    // cubeRef.current.rotation.y += delta;
    // groupRef.current.rotation.y += delta;
  });

  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />
      <group ref={groupRef}>
        <PivotControls anchor={[0, 0, 0]} depthTest={false}>
          <mesh ref={sphereRef} position-x={-2}>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
            <Html
              position={[1, 1, 0]}
              wrapperClass="label"
              center
              distanceFactor={4}
              occlude={[sphereRef, cubeRef]}
            >
              That's a sphere 👍
            </Html>
          </mesh>
        </PivotControls>

        <mesh ref={cubeRef} position={[2, 0, 0]} scale={1.5}>
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
        <TransformControls object={cubeRef} mode="rotate" />
      </group>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>

      <CustomObject />

      <Html>Test</Html>
    </>
  );
}
