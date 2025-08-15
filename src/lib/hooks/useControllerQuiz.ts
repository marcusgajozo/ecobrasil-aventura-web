import { ControllerQuizContext } from "@/lib/context/ControllerQuiz";
import { useContext } from "react";

export const useControllerQuiz = () => {
  const context = useContext(ControllerQuizContext);

  if (!context) {
    throw new Error(
      "useControllerQuiz deve ser usado dentro de um ControllerQuizProvider"
    );
  }

  return context;
};
