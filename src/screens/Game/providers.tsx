import { CharacterTeleportProvider } from "@/context/CharacterTeleport";
import { ControllerMapProvider } from "@/context/ControllerMap";
import { ControllerQuizProvider } from "@/context/ControllerQuiz";
import { FirstTimePlayingProvider } from "@/context/FirstTimePlaying";
import { MapsManagerProvider } from "@/context/MapsManager";
import { ReactNode } from "react";

export const GameProviders = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  return (
    <MapsManagerProvider>
      <ControllerMapProvider>
        <CharacterTeleportProvider>
          <ControllerQuizProvider>
            <FirstTimePlayingProvider>{children}</FirstTimePlayingProvider>
          </ControllerQuizProvider>
        </CharacterTeleportProvider>
      </ControllerMapProvider>
    </MapsManagerProvider>
  );
};
