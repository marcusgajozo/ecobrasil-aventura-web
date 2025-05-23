import { QuizWrapper } from "./components/QuizWrapper/QuizWrapper";
import { QuizProvider } from "./context/QuizContext";

export const Quiz = () => {
  return (
    <QuizProvider>
      <QuizWrapper />
    </QuizProvider>
  );
};
