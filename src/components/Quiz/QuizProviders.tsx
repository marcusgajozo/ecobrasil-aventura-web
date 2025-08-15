import { QuizProvider } from "./context/QuizContext";

export const QuizProviders = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <QuizProvider>{children}</QuizProvider>;
};
