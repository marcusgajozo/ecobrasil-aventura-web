import { QuizModal } from "./components/QuizModal";
import { QuizProvider } from "./context/QuizContext";

export const Quiz = () => {
  return (
    <QuizProvider>
      <QuizModal />
    </QuizProvider>
  );
};
