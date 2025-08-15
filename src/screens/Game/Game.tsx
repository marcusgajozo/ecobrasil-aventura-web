import Character from "@/components/Character";
import { GameInformation } from "@/components/GameInformation/GameInformation";
import { Lighting } from "@/components/Lighting/Lighting";
import { MapScreen } from "@/components/MapScreen/MapScreen";
import { Islands } from "@/components/organisms/Islands/Islands";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Leva } from "leva";
import { Quiz } from "../../components/Quiz/Quiz";
import { GameProviders } from "./GameProviders";

export const Game = () => {
  return (
    <GameProviders>
      <Leva hidden={false} />

      <GameInformation />
      <MapScreen />
      <Quiz />

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
    </GameProviders>
  );
};
