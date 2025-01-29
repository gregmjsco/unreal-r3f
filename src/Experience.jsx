export default function Experience() {
  return (
    <>
      <mesh position-x={-2}>
        <sphereGeometry />
        <meshBasicMaterial color="orange" />
      </mesh>

      <mesh position={[2, 0, 0]} scale={1.5}>
        <boxGeometry />
        <meshBasicMaterial color="mediumpurple" wireframe />
      </mesh>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshBasicMaterial color="greenyellow" />
      </mesh>
    </>
  );
}
