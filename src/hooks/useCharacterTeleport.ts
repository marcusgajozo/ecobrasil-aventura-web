import { CharacterTeleportContext } from "@/context/CharacterTeleport";
import { useContext } from "react";

export const useCharacterTeleport = () => {
  const context = useContext(CharacterTeleportContext);
  if (!context) {
    throw new Error(
      "useControllerMap deve ser usado dentro de um ControllerMapProvider"
    );
  }

  return context;
};
