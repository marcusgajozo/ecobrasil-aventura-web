import Character from "@/components/Character";
import { Lighting } from "@/components/Lighting/Lighting";
import { MapScreen } from "@/components/MapScreen/MapScreen";
import { ModalConfigGame } from "@/components/ModalConfigGame/ModalGameSetup";
import { ModalEndOfGame } from "@/components/ModalEndOfGame/ModalEndOfGame";
import { ModalQuiz } from "@/components/ModalQuiz/ModalQuiz";
import { HUD } from "@/components/organisms/HUD/HUD";
import { Islands } from "@/components/organisms/Islands/Islands";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Leva } from "leva";
import { GameProviders } from "./GameProviders";
import { ModalHelp } from "@/components/ModalHelp/ModalHelp";
import { ModalTutorial } from "@/components/ModalTutorial/ModalTutorial";

export const Game = () => {
  return (
    <GameProviders>
      <Leva hidden />

      <HUD />
      <MapScreen />
      <ModalQuiz />
      <ModalConfigGame />
      <ModalEndOfGame />
      <ModalHelp />
      <ModalTutorial />

      <Canvas shadows camera={{ position: [10, 10, -10], fov: 30 }}>
        <color attach="background" args={["#000000"]} />

        <Lighting />

        <Stars
          radius={100}
          depth={50}
          count={5500}
          factor={7}
          saturation={0}
          fade
          speed={1}
        />

        <Physics>
          <Islands />
          <Character />
        </Physics>
      </Canvas>
    </GameProviders>
  );
};
