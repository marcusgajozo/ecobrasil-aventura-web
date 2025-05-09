import { FirstTimePlayingContext } from "@/context/FirstTimePlaying";
import { useContext } from "react";

export const useFirstTimePlaying = () => {
  const context = useContext(FirstTimePlayingContext);

  if (!context) {
    throw new Error(
      "useFirstTimePlaying deve ser usado dentro de um ControllerMapProvider"
    );
  }

  return context;
};
