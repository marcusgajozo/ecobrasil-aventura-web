import { CharacterTeleportProvider } from "@/context/CharacterTeleport";
import { ControllerMapProvider } from "@/context/ControllerMap";
import { ControllerQuizProvider } from "@/context/ControllerQuiz";
import { MapsManagerProvider } from "@/context/MapsManager";
import { ReactNode } from "react";

export const GameProviders = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  return (
    <MapsManagerProvider>
      <ControllerMapProvider>
        <CharacterTeleportProvider>
          <ControllerQuizProvider>{children}</ControllerQuizProvider>
        </CharacterTeleportProvider>
      </ControllerMapProvider>
    </MapsManagerProvider>
  );
};
