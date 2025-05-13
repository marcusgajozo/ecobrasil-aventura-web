import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

export const useQuiz = () => {
  const context = useContext(QuizContext);

  if (!context) {
    throw new Error("useQuiz deve ser usado dentro de um QuizContextProvider");
  }

  return context;
};
