import Character from "@/components/Character";
import { Map } from "@/screens/Game/@components/Map";
import Maps from "@/components/Maps";
import { Quiz } from "@/components/Quiz";
import { KeyboardControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import AccountPlayer from "./@components/AccountPlayer";
import { HelpUs } from "./@components/HelpUs";
import { GameProviders } from "./GameProviders";
import { keyboardMap } from "../../lib/constants/keyboardMap";

export const Game = () => {
  return (
    <GameProviders>
      <KeyboardControls map={keyboardMap}>
        <AccountPlayer />
        <Map />
        <Quiz />
        <HelpUs />
        <Canvas shadows camera={{ position: [10, 10, -10], fov: 30 }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[10, 10, 0]} intensity={1.5} castShadow />
          <Physics>
            <Maps />
            <Character />
          </Physics>
        </Canvas>
      </KeyboardControls>
    </GameProviders>
  );
};
