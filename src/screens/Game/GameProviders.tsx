import { GlobalKeyHandlers } from "@/components/organisms/GlobalKeyHandlers/GlobalKeyHandlers";
import { keyboardMap } from "@/lib/constants/keyboardMap";
import { CharacterTeleportProvider } from "@/lib/context/CharacterTeleport";
import { ControllerMapProvider } from "@/lib/context/ControllerMap";
import { ControllerQuizProvider } from "@/lib/context/ControllerQuiz";
import { KeyboardControls } from "@react-three/drei";
import { ReactNode } from "react";

export const GameProviders = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  return (
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
  );
};
