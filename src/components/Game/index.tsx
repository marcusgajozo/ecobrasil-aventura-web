import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import Character from "../Character";
import { Map } from "../Map";
import Maps from "../Maps";
import { Quiz } from "../Quiz";
import WindowWelcome from "../WindowWelcome";
import AccountPlayer from "./components/AccountPlayer";
import ImageControllers from "./components/ImageControllers";
import { GameProviders } from "./providers";
import { KeyboardControls } from "@react-three/drei";
import { keyboardMap } from "./constants/keyboardMap";

const Game = () => {
  return (
    <GameProviders>
      <KeyboardControls map={keyboardMap}>
        <WindowWelcome />
        <ImageControllers />
        <AccountPlayer />
        <Map />
        <Quiz />
        <Canvas shadows camera={{ position: [10, 10, -10], fov: 30 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 0]} intensity={1.5} castShadow />
          <pointLight position={[0, 10, 0]} intensity={3} distance={10} />
          <Physics>
            <Maps />
            <Character />
          </Physics>
        </Canvas>
      </KeyboardControls>
    </GameProviders>
  );
};

export default Game;
