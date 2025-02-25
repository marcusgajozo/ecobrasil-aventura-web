import { createContext, ReactNode } from "react";
import { useQuizReducer } from "../hooks/useQuizReducer";
import { QuizAction, QuizState } from "../types";

type QuizContextType = {
  state: QuizState;
  dispatch: React.Dispatch<QuizAction>;
};

export const QuizContext = createContext({} as QuizContextType);

export const QuizProvider = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  const [state, dispatch] = useQuizReducer();

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};
