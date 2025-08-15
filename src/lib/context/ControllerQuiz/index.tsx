import { createContext, ReactNode, useState } from "react";

type ControllerQuizContextType = {
  openQuiz: boolean;
  setOpenQuiz: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ControllerQuizContext = createContext(
  {} as ControllerQuizContextType
);

export const ControllerQuizProvider = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  const [openQuiz, setOpenQuiz] = useState(false);
  return (
    <ControllerQuizContext.Provider value={{ openQuiz, setOpenQuiz }}>
      {children}
    </ControllerQuizContext.Provider>
  );
};
