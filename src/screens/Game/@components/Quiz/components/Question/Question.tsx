import { useEffect } from "react";
import { useQuiz } from "../../hooks/useQuiz";
import * as S from "./styles";
import { useTimer } from "../../hooks/useTimer";

export const Question = () => {
  const { state, dispatch } = useQuiz();
  const { questions, currentQuestionIndex, selectedOption } = state;
  const currentQuestion = questions[currentQuestionIndex];

  // TODO: ajustar contagem regressiva para reiniciar quando a pergunta mudar
  const { timeLeft, start, reset } = useTimer(10, () => {
    dispatch({ type: "NEXT_QUESTION" });
  });

  useEffect(() => {
    start();
  }, [start]);

  useEffect(() => {
    reset(10);
    start();
  }, [currentQuestionIndex, reset, start]);

  return (
    <S.Container>
      <div className="question-content">
        <p>{currentQuestion.pergunta}</p>
        <div className="question-timer">{timeLeft}</div>
      </div>
      <div className="options">
        {currentQuestion.opcoes.map((item, index) => (
          <S.Option
            key={index}
            onClick={() => dispatch({ type: "SELECT_OPTION", payload: index })}
            selected={selectedOption === index}
          >
            <div className="num">{`${index + 1})`}</div>
            <div className="text">{item}</div>
          </S.Option>
        ))}
      </div>
    </S.Container>
  );
};
