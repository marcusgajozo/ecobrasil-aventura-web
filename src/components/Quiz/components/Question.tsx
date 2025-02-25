import { useQuiz } from "../hooks/useQuiz";
import * as S from "../styles";

export const Question = () => {
  const { state, dispatch } = useQuiz();
  const { questions, currentQuestionIndex, selectedOption } = state;
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <>
      <div className="question-content">
        <div className="question-text">{currentQuestion.pergunta}</div>
        <div className="question-timer">10</div>
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
      <div
        className="button"
        onClick={() => dispatch({ type: "NEXT_QUESTION" })}
      >
        Enviar
      </div>
    </>
  );
};
