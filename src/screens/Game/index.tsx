import { HUD } from "@/components/@organisms/HUD/HUD";
import { ModalConfigGame } from "@/components/@organisms/ModalConfigGame/ModalGameSetup";
import { ModalEndOfGame } from "@/components/@organisms/ModalEndOfGame/ModalEndOfGame";
import { ModalHelp } from "@/components/@organisms/ModalHelp/ModalHelp";
import { ModalMapScreen } from "@/components/@organisms/ModalMapScreen";
import { ModalQuiz } from "@/components/@organisms/ModalQuiz/ModalQuiz";
import { ModalTutorial } from "@/components/@organisms/ModalTutorial/ModalTutorial";
import Character from "@/components/Character";
import { Islands } from "@/components/Islands";
import { Lighting } from "@/components/Lighting";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { GameProviders } from "./contexts/GameProviders";

export const Game = () => {
  return (
    <GameProviders>
      <HUD />
      <ModalMapScreen />
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
