import { GlobalKeyHandlers } from "@/components/global-key-handlers";
import { keyboardMap } from "@/lib/constants/keyboard-map";
import { AudioProvider } from "@/lib/context/audio-provider";
import { TeleportCharacterProvider } from "@/lib/context/teleport-character-provider";
import { KeyboardControls } from "@react-three/drei";
import { ReactNode } from "react";

export const GameProviders = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  return (
    <TeleportCharacterProvider>
      <AudioProvider>
        <KeyboardControls map={keyboardMap}>
          <GlobalKeyHandlers />
          {children}
        </KeyboardControls>
      </AudioProvider>
    </TeleportCharacterProvider>
  );
};
