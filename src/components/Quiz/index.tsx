import { useControllerQuiz } from "@/hooks/useControllerQuiz";
import { useEffect, useState } from "react";

import * as S from "./styles";

export const Quiz = () => {
  const { openQuiz } = useControllerQuiz();
  const [questionsAnsweredCorrectly, setQuestionsAnsweredCorrectly] =
    useState(0);

  useEffect(() => {
    setQuestionsAnsweredCorrectly(0);
  }, [openQuiz]);

  return (
    <S.Container openQuiz={openQuiz}>
      <h1>Quiz</h1>
    </S.Container>
  );
};
