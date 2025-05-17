import Character from "@/components/Character";
import { Intro } from "@/components/Intro/Intro";
import { Map } from "@/components/Map";
import Maps from "@/components/Maps";
import { Quiz } from "@/components/Quiz";
import WindowWelcome from "@/components/WindowWelcome";
import { KeyboardControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { keyboardMap } from "../../constants/keyboardMap";
import AccountPlayer from "../AccountPlayer";
import { HelpUs } from "../HelpUs";
import ImageControllers from "../ImageControllers";
import { useFirstTimePlaying } from "@/hooks/useFirstTimePlaying";

export const BuildGame = () => {
  const { firstTime } = useFirstTimePlaying();
  return (
    <>
      {firstTime && <Intro />}
      {!firstTime && (
        <KeyboardControls map={keyboardMap}>
          <WindowWelcome />
          <ImageControllers />
          <AccountPlayer />
          <Map />
          <Quiz />
          <HelpUs />
          <Canvas shadows camera={{ position: [10, 10, -10], fov: 30 }}>
            <ambientLight intensity={0.8} />
            <directionalLight
              position={[10, 10, 0]}
              intensity={1.5}
              castShadow
            />
            <Physics>
              <Maps />
              <Character />
            </Physics>
          </Canvas>
        </KeyboardControls>
      )}
    </>
  );
};
