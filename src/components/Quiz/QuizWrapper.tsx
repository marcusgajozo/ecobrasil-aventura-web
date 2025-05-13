import { useControllerQuiz } from "@/hooks/useControllerQuiz";
import { Question } from "./components/Question";
import { useQuiz } from "./hooks/useQuiz";
import * as S from "./styles";
import { useEffect } from "react";
import { useMapsManager } from "@/hooks/useMapsManager";

export const QuizWrapper = () => {
  const { openQuiz, setOpenQuiz } = useControllerQuiz();
  const { currrentMap, saveMap } = useMapsManager();
  const { state, dispatch } = useQuiz();
  const { questionsAnsweredCorrectly } = state;

  const handleCloseQuiz = () => {
    dispatch({ type: "RESET_QUIZ" });
    setOpenQuiz(false);
  };

  useEffect(() => {
    if (questionsAnsweredCorrectly === 3) {
      saveMap(currrentMap);
    }
  }, [currrentMap, questionsAnsweredCorrectly, saveMap]);

  return (
    <S.Container openQuiz={openQuiz}>
      <S.ContainerQuiz>
        <img
          className="close-svg"
          src="/close.svg"
          alt="Fechar"
          onClick={handleCloseQuiz}
        />
        <img className="quiz-svg" src="/quiz.svg" alt="Quiz" />
        <h2>EcoBrasil Aventura</h2>

        {questionsAnsweredCorrectly === 3 ? (
          <h2>
            Parabéns! Você salvou a ilha respondendo 3 perguntas corretamente!
          </h2>
        ) : (
          <Question />
        )}
      </S.ContainerQuiz>
    </S.Container>
  );
};
