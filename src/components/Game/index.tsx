import { Canvas } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import Character from "../Character";
import Maps from "../Maps";
import WindowWelcome from "../WindowWelcome";

const Game = () => {
  return (
    <>
      <WindowWelcome />
      <Canvas shadows camera={{ position: [10, 10, -10], fov: 30 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 0]} intensity={1.5} castShadow />
        <pointLight position={[0, 10, 0]} intensity={3} distance={10} />
        <Physics debug>
          <Maps />
          <Character />
          <RigidBody>
            <mesh>
              <boxGeometry />
              <meshBasicMaterial />
            </mesh>
          </RigidBody>
        </Physics>
      </Canvas>
    </>
  );
};

export default Game;
