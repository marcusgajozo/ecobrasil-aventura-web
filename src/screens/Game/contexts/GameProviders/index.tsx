import { GlobalKeyHandlers } from "@/components/GlobalKeyHandlers";
import { keyboardMap } from "@/lib/constants/keyboardMap";
import { AudioProvider } from "@/lib/context/AudioProvider";
import { TeleportCharacterProvider } from "@/lib/context/TeleportCharacterProvider";
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
