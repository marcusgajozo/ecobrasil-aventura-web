import { useControllerQuiz } from "@/hooks/useControllerQuiz";
import { useCallback, useEffect, useState } from "react";

import { useMapsManager } from "@/hooks/useMapsManager";
import { quiz } from "./questions.json";
import * as S from "./styles";

// TODO: (feat) mostrar perguntas referente ao mapa atual
// TODO: (feat) colocar as perguntas em um context

// TODO: (fix) não está trocando a pergunta

export const Quiz = () => {
  const { openQuiz, setOpenQuiz } = useControllerQuiz();
  const { currrentMap, saveMap } = useMapsManager();
  const [questionsAnsweredCorrectly, setQuestionsAnsweredCorrectly] =
    useState(0);
  const [optionSelected, setOptionSelected] = useState<number>();

  const questions = quiz;

  const randomNumberQuestion = useCallback((quantQuestion: number) => {
    return Math.floor(Math.random() * quantQuestion);
  }, []);

  const [nextQuestion, setNextQuestion] = useState<number>(() =>
    randomNumberQuestion(questions.length)
  );

  const currentQuestion = questions[nextQuestion];

  useEffect(() => {
    setQuestionsAnsweredCorrectly(0);
    setOptionSelected(undefined);
  }, [openQuiz]);

  const handleCloseQuiz = () => {
    setOpenQuiz(false);
  };

  const handleOptionSelected = (num: number) => {
    setOptionSelected(num);
  };

  const handleVerifyResponse = () => {
    if (optionSelected !== undefined) {
      if (optionSelected === currentQuestion?.respostaCorreta) {
        questions.splice(optionSelected, 1);
        setQuestionsAnsweredCorrectly((prev) => prev + 1);
        if (questions.length === 0) {
          console.log("entrei");
          questions.push(...quiz);
        }
      } else {
        // dar algum feedback ao usuário que ele errou
      }
      setNextQuestion(randomNumberQuestion(questions.length));
      setOptionSelected(undefined);
    } else {
      // dar algum feedback ao usuário de selecionar opção
    }
  };

  return (
    <S.Container openQuiz={openQuiz}>
      <S.ContainerQuiz>
        <img
          className="close-svg"
          src="/close.svg"
          alt="circulo com x dentro"
          onClick={handleCloseQuiz}
        />
        <img className="quiz-svg" src="/quiz.svg" alt="palavra quiz" />
        <h2>EcoBrasil Aventura</h2>
        {questionsAnsweredCorrectly === 3 && (
          <h2>
            Parabéns! Você salvou a ilha repondendo 3 perguntas corretamente!
          </h2>
        )}
        {questionsAnsweredCorrectly < 3 && (
          <>
            <div className="question-content">
              <div className="question-text">{currentQuestion?.pergunta}</div>
              <div className="question-timer">10</div>
            </div>
            <div className="options">
              {currentQuestion?.opcoes.map((item, index) => (
                <S.Option
                  key={`${index}-option-question`}
                  onClick={() => handleOptionSelected(index)}
                  selected={optionSelected === index}
                >
                  <div className="num">{`${index + 1})`}</div>
                  <div className="text">{item}</div>
                </S.Option>
              ))}
            </div>
            <div className="button" onClick={handleVerifyResponse}>
              Enviar
            </div>
          </>
        )}
      </S.ContainerQuiz>
    </S.Container>
  );
};
