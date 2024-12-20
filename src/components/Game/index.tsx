import { Canvas } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import Character from "../Character";
import Maps from "../Maps";
import WindowWelcome from "../WindowWelcome";
import AccountPlayer from "./components/AccountPlayer";
import ImageControllers from "./components/ImageControllers";
import { GameProviders } from "./providers";
import { Map } from "../Map";
import { OrbitControls } from "@react-three/drei";
import { Quiz } from "../Quiz";

const Game = () => {
  return (
    <GameProviders>
      <WindowWelcome />
      <ImageControllers />
      <AccountPlayer />
      <Map />
      <Quiz />
      <Canvas shadows camera={{ position: [10, 10, -10], fov: 30 }}>
        <OrbitControls />
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
    </GameProviders>
  );
};

export default Game;
