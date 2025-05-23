import Character from "@/screens/Game/@components/Character";
import { MapScreen } from "@/screens/Game/@components/MapScreen/MapScreen";
import { Islands } from "@/screens/Game/@components/Islands/Islands";
import { Quiz } from "@/screens/Game/@components/Quiz/Quiz";
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
        <MapScreen />
        <Quiz />
        <HelpUs />
        <Canvas shadows camera={{ position: [10, 10, -10], fov: 30 }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[10, 10, 0]} intensity={1.5} castShadow />
          <Physics>
            <Islands />
            <Character />
          </Physics>
        </Canvas>
      </KeyboardControls>
    </GameProviders>
  );
};
