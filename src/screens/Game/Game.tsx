import Character from "@/screens/Game/@components/Character";
import { Islands } from "@/screens/Game/@components/Islands/Islands";
import { MapScreen } from "@/screens/Game/@components/MapScreen/MapScreen";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Leva } from "leva";
import AccountPlayer from "./@components/AccountPlayer";
import { HelpUs } from "./@components/HelpUs";
import { Quiz } from "./@components/Quiz/Quiz";
import { GameProviders } from "./GameProviders";

export const Game = () => {
  return (
    <GameProviders>
      <AccountPlayer />
      <MapScreen />
      <Quiz />
      <HelpUs />
      <Canvas shadows camera={{ position: [10, 10, -10], fov: 30 }}>
        <Leva hidden />
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 0]} intensity={1.5} castShadow />
        <Physics>
          <Islands />
          <Character />
        </Physics>
      </Canvas>
    </GameProviders>
  );
};
