import { GlobalKeyHandlers } from "@/components/organisms/GlobalKeyHandlers/GlobalKeyHandlers";
import { keyboardMap } from "@/lib/constants/keyboardMap";
import { ControllerMapProvider } from "@/lib/context/ControllerMap";
import { ControllerQuizProvider } from "@/lib/context/ControllerQuiz";
import { TeleportCharacterProvider } from "@/lib/context/TeleportCharacterProvider";
import { KeyboardControls } from "@react-three/drei";
import { ReactNode } from "react";

export const GameProviders = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  return (
    <TeleportCharacterProvider>
      <ControllerMapProvider>
        <ControllerQuizProvider>
          <KeyboardControls map={keyboardMap}>
            <GlobalKeyHandlers />
            {children}
          </KeyboardControls>
        </ControllerQuizProvider>
      </ControllerMapProvider>
    </TeleportCharacterProvider>
  );
};
