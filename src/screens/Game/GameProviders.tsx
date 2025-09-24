import { GlobalKeyHandlers } from "@/components/GlobalKeyHandlers";
import { keyboardMap } from "@/lib/constants/keyboardMap";
import { AudioProvider } from "@/lib/context/AudioProvider";
import { ControllerMapProvider } from "@/lib/context/ControllerMap";
import { TeleportCharacterProvider } from "@/lib/context/TeleportCharacterProvider";
import { KeyboardControls } from "@react-three/drei";
import { ReactNode } from "react";

export const GameProviders = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  return (
    <TeleportCharacterProvider>
      <AudioProvider>
        <ControllerMapProvider>
          <KeyboardControls map={keyboardMap}>
            <GlobalKeyHandlers />
            {children}
          </KeyboardControls>
        </ControllerMapProvider>
      </AudioProvider>
    </TeleportCharacterProvider>
  );
};
