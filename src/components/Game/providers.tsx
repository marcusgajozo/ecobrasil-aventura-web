import { CharacterTeleportProvider } from "@/context/CharacterTeleport";
import { ControllerMapProvider } from "@/context/ControllerMap";
import { ControllerQuizProvider } from "@/context/ControllerQuiz";
import { ReactNode } from "react";

export const GameProviders = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  return (
    <ControllerMapProvider>
      <CharacterTeleportProvider>
        <ControllerQuizProvider>{children}</ControllerQuizProvider>
      </CharacterTeleportProvider>
    </ControllerMapProvider>
  );
};
