import { QuizProvider } from "./context/QuizContext";
import { QuizWrapper } from "./QuizWrapper";

export const Quiz = () => {
  return (
    <QuizProvider>
      <QuizWrapper />
    </QuizProvider>
  );
};
