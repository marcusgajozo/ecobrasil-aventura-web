import { CharacterTeleportProvider } from "@/lib/context/CharacterTeleport";
import { ControllerMapProvider } from "@/lib/context/ControllerMap";
import { ControllerQuizProvider } from "@/lib/context/ControllerQuiz";
import { MapsManagerProvider } from "@/lib/context/MapsManager";
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
