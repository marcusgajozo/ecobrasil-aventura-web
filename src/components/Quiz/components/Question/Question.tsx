import useCountdownTimer from "@/lib/hooks/useCountdownTimer";
import { useQuiz } from "../../hooks/useQuiz";
import * as S from "./styles";
import { useCallback, useEffect } from "react";

const QUESTION_TIME_LIMIT = 15; // Seconds per question

export const Question = () => {
  const { state, dispatch } = useQuiz();
  const { questions, currentQuestionIndex, selectedOption } = state;
  const currentQuestion = questions[currentQuestionIndex];

  const handleTimeUp = useCallback(() => {
    console.log(
      `[Question ${currentQuestionIndex}] Time's up! Dispatching NEXT_QUESTION.`
    );
    dispatch({ type: "NEXT_QUESTION" });
    // Aqui você também pode querer despachar uma ação para marcar a resposta como errada/não respondida
    // dispatch({ type: "ANSWER_QUESTION", payload: { isCorrect: false, timeUp: true } });
  }, [dispatch, currentQuestionIndex]);

  const {
    remainingTime,
    reset: resetTimer,
    start: startTimer, // Renomeado para clareza
    pause: pauseTimer, // Adicionado para controle explícito se necessário
  } = useCountdownTimer({
    initialTime: QUESTION_TIME_LIMIT,
    onTimerEnd: handleTimeUp,
    autoStart: false, // Importante: controlamos o início manualmente
  });

  // Efeito para resetar e iniciar o timer quando a pergunta (índice) muda
  useEffect(() => {
    if (currentQuestion) {
      // Garante que temos uma pergunta antes de iniciar o timer
      console.log(
        `[Question ${currentQuestionIndex}] useEffect triggered. Resetting timer to ${QUESTION_TIME_LIMIT}s and starting.`
      );
      resetTimer(QUESTION_TIME_LIMIT); // Reseta para o tempo total
      startTimer(); // Inicia o contador
    } else {
      console.warn(
        `[Question] currentQuestion is undefined for index ${currentQuestionIndex}. Timer not started.`
      );
      pauseTimer(); // Garante que o timer esteja pausado se não houver pergunta
    }

    // Função de limpeza para pausar o timer se o componente Question for desmontado
    // ou antes que o efeito seja re-executado para uma nova currentQuestionIndex.
    return () => {
      console.log(`[Question ${currentQuestionIndex}] Cleanup: Pausing timer.`);
      pauseTimer();
    };
    // resetTimer e startTimer são funções memoizadas do hook, incluí-las é o padrão.
    // currentQuestion é incluído para reiniciar se o objeto da pergunta em si mudar, mesmo que o índice não mude (raro).
  }, [
    currentQuestionIndex,
    currentQuestion,
    resetTimer,
    startTimer,
    pauseTimer,
  ]);

  return (
    <S.Container>
      <div className="question-content">
        <p>{currentQuestion.pergunta}</p>
        <div className="question-timer">{remainingTime}</div>
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
