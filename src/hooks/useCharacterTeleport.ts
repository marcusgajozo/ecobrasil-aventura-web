import { CharacterTeleportContext } from "@/context/CharacterTeleport";
import { useContext } from "react";

export const useCharacterTeleport = () => {
  const context = useContext(CharacterTeleportContext);

  if (!context) {
    throw new Error(
      "useCharacterTeleport deve ser usado dentro de um CharacterTeleportProvider"
    );
  }

  return context;
};
