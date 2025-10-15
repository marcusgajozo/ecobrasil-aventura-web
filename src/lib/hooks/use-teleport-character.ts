import { useContext } from "react";
import { TeleportCharacterContext } from "../context/teleport-character-provider";

export const useTeleportCharacter = () => {
  const ctx = useContext(TeleportCharacterContext);
  if (!ctx)
    throw new Error("useTeleport deve ser usado dentro de TeleportProvider");
  return ctx;
};
