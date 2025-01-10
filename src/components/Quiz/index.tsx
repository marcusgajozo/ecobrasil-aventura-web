import { useControllerQuiz } from "@/hooks/useControllerQuiz";
import { useEffect, useState } from "react";

import * as S from "./styles";
import { useCharacterTeleport } from "@/hooks/useCharacterTeleport";
import questionsJson from "./questions.json";

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

export const Quiz = () => {
  const { openQuiz, setOpenQuiz } = useControllerQuiz();
  const { currrentMap, saveMap } = useCharacterTeleport();
  const [questionsAnsweredCorrectly, setQuestionsAnsweredCorrectly] =
    useState(0);

  const [currentQuestion, setQuestion] = useState<Question>();

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

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget.closest("form");
    if (form) {
      const formData = new FormData(form);
      const selectedOption = formData.get("question");
      if (selectedOption === currentQuestion?.respostaCorreta.toString()) {
        setQuestionsAnsweredCorrectly((prev) => prev + 1);
      }
      const question = generateQuestion();
      setQuestion(question);
    }
  };

  return (
    <S.Container openQuiz={openQuiz}>
      {questionsAnsweredCorrectly === 3 ? (
        <h2>
          Parabéns! Você salvou a ilha repondendo 3 perguntas corretamente!
        </h2>
      ) : (
        <>
          <h1>Quiz</h1>
          <p>Acerte 3 perguntas para liberar outros mapas</p>
          <h3>Você acertou: {questionsAnsweredCorrectly}</h3>
          <form onSubmit={(event) => onSubmit(event)}>
            <h4>{currentQuestion?.pergunta}</h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {currentQuestion?.opcoes.map((opcao, index) => (
                <div
                  key={`option-${index}`}
                  style={{ display: "flex", gap: 10 }}
                >
                  <input type="radio" name="question" value={index} />
                  <label htmlFor="question">{opcao}</label>
                </div>
              ))}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 10,
                }}
              >
                <button type="submit">Enviar</button>
              </div>
            </div>
          </form>
        </>
      )}
      <button onClick={handleCloseQuiz}>fechar</button>
    </S.Container>
  );
};
