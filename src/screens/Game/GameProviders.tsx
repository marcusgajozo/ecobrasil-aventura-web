import { GlobalKeyHandlers } from "@/components/organisms/GlobalKeyHandlers/GlobalKeyHandlers";
import { keyboardMap } from "@/lib/constants/keyboardMap";
import { CharacterTeleportProvider } from "@/lib/context/CharacterTeleport";
import { ControllerMapProvider } from "@/lib/context/ControllerMap";
import { ControllerQuizProvider } from "@/lib/context/ControllerQuiz";
import { MapsManagerProvider } from "@/lib/context/MapsManager";
import { KeyboardControls } from "@react-three/drei";
import { ReactNode } from "react";

export const GameProviders = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  return (
    <MapsManagerProvider>
      <ControllerMapProvider>
        <CharacterTeleportProvider>
          <ControllerQuizProvider>
            <KeyboardControls map={keyboardMap}>
              <GlobalKeyHandlers />
              {children}
            </KeyboardControls>
          </ControllerQuizProvider>
        </CharacterTeleportProvider>
      </ControllerMapProvider>
    </MapsManagerProvider>
  );
};
