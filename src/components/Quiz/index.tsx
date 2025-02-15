import { useControllerQuiz } from "@/hooks/useControllerQuiz";
import { useEffect, useState } from "react";

import { useMapsManager } from "@/hooks/useMapsManager";
import questionsJson from "./questions.json";
import * as S from "./styles";

type Question = {
  pergunta: string;
  opcoes: string[];
  respostaCorreta: number;
};

const generateRandomNumber = (max: number) => {
  return Math.floor(Math.random() * (max - 0)) + 0;
};

const numberQuestionCategory = questionsJson.quiz.length;

const numberQuestionForCategory = questionsJson.quiz.map((item, index) => ({
  id: index,
  name: item.categoria,
  numberQuestion: item.perguntas.length,
}));

const generateQuestion = () => {
  const numberGeneratedQuestionCategory = generateRandomNumber(
    numberQuestionCategory
  );
  const numberTotalQuestionCategory =
    numberQuestionForCategory.find(
      (item) => item.id === numberGeneratedQuestionCategory
    )?.numberQuestion || 1;

  const numberGeneratedQuestion = generateRandomNumber(
    numberTotalQuestionCategory
  );

  return questionsJson.quiz[numberGeneratedQuestionCategory].perguntas[
    numberGeneratedQuestion
  ];
};

// TODO: não repetir perguntas repondidas corretamente
// TODO: mostrar mensagem de salvar a ilha depois de acetar 3 perguntas
// TODO: melhorar visualmente o quiz

export const Quiz = () => {
  const { openQuiz, setOpenQuiz } = useControllerQuiz();
  const { currrentMap, saveMap } = useMapsManager();
  const [questionsAnsweredCorrectly, setQuestionsAnsweredCorrectly] =
    useState(0);

  const [, setQuestion] = useState<Question>();

  useEffect(() => {
    setQuestionsAnsweredCorrectly(0);
    const question = generateQuestion();
    setQuestion(question);
  }, [openQuiz]);

  useEffect(() => {
    if (questionsAnsweredCorrectly === 3) {
      saveMap(currrentMap);
    }
  }, [currrentMap, questionsAnsweredCorrectly, saveMap]);

  const handleCloseQuiz = () => {
    setOpenQuiz(false);
  };

  // const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const form = event.currentTarget.closest("form");
  //   if (form) {
  //     const formData = new FormData(form);
  //     const selectedOption = formData.get("question");
  //     if (selectedOption === currentQuestion?.respostaCorreta.toString()) {
  //       setQuestionsAnsweredCorrectly((prev) => prev + 1);
  //     }
  //     const question = generateQuestion();
  //     setQuestion(question);
  //   }
  // };

  return (
    <S.Container openQuiz={openQuiz}>
      {questionsAnsweredCorrectly === 3 ? (
        <h2>
          Parabéns! Você salvou a ilha repondendo 3 perguntas corretamente!
        </h2>
      ) : (
        <S.ContainerQuiz>
          <img
            className="close-svg"
            src="/close.svg"
            alt="circulo com x dentro"
            onClick={handleCloseQuiz}
          />
          <img className="quiz-svg" src="/quiz.svg" alt="palavra quiz" />
          <h2>EcoBrasil Aventura</h2>
          <div className="question-content">
            <span className="question-text">
              Qual desses materiais pode ser reciclado?
            </span>
            <div className="question-timer">10</div>
          </div>
          <div className="options">
            <div className="option">A) </div>
            <div className="option">B) </div>
            <div className="option">D) </div>
          </div>
          <div className="button">Enviar</div>
        </S.ContainerQuiz>
      )}
    </S.Container>
  );
};
