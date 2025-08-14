import Character from "@/components/Character";
import { Islands } from "@/components/organisms/Islands/Islands";
import { MapScreen } from "@/components/MapScreen/MapScreen";
import { KeyboardControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Leva } from "leva";
import { keyboardMap } from "../../lib/constants/keyboardMap";
import AccountPlayer from "../../components/AccountPlayer";
import { HelpUs } from "../../components/HelpUs";
import { Quiz } from "../../components/Quiz/Quiz";
import { GameProviders } from "./GameProviders";
import { Lighting } from "@/components/Lighting/Lighting";

export const Game = () => {
  return (
    <GameProviders>
      <KeyboardControls map={keyboardMap}>
        <Leva hidden={false} />

        <AccountPlayer />
        <MapScreen />
        <Quiz />
        <HelpUs />

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

          <Physics debug>
            <Islands />
            <Character />
          </Physics>
        </Canvas>
      </KeyboardControls>
    </GameProviders>
  );
};
