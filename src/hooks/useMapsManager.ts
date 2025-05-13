import { MapsManagerContext } from "@/context/MapsManager";
import { useContext } from "react";

export const useMapsManager = () => {
  const context = useContext(MapsManagerContext);

  if (!context) {
    throw new Error(
      "useControllerQuiz deve ser usado dentro de um ControllerQuizProvider"
    );
  }

  return context;
};
