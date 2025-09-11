import { Modal } from "@/components/organisms/Modal/Modal";
import { useEffect } from "react";
import { useModalQuiz } from "./@hooks/useModalQuiz";
import { Congratulations } from "./@components/Congratulations";
import { cn } from "@/lib/utils/utils";
import { PlayFeedback } from "./@components/ PlayFeedback";

export const ModalQuiz = () => {
  const {
    isQuizCompleted,
    handleCloseQuiz,
    handleQuizCompletion,
    currentQuestion,
    handleSelectAnswer,
    selectedAnswer,
    handleSendAnswer,
    gotRight,
    isAnswered,
    handleNextQuestion,
    isOpenModal,
  } = useModalQuiz();

  useEffect(() => {
    handleQuizCompletion();
  }, [isQuizCompleted]);

  const response = currentQuestion.opcoes[currentQuestion.respostaCorreta];
  const handleButtonAction = isAnswered ? handleNextQuestion : handleSendAnswer;

  return (
    <Modal.Root open={isOpenModal} onClose={handleCloseQuiz}>
      <Modal.Content>
        <Modal.Header title="Quiz" />
        <Modal.Body>
          {isQuizCompleted && <Congratulations />}
          {!isQuizCompleted && (
            <>
              <h2 className="text-2xl mb-3">{currentQuestion.pergunta}</h2>
              {isAnswered && (
                <PlayFeedback gotRight={gotRight} response={response} />
              )}
              <div className="flex flex-col gap-2">
                {currentQuestion.opcoes.map((option, index) => (
                  <div
                    key={option}
                    className={cn("py-2 px-3 rounded-md outline font-bold", {
                      "bg-primary-300": index === selectedAnswer,
                      "cursor-pointer hover:bg-primary-400": !isAnswered,
                      "bg-warning": isAnswered && index === selectedAnswer,
                      "bg-success":
                        isAnswered && index === currentQuestion.respostaCorreta,
                    })}
                    onClick={() => handleSelectAnswer(index)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.ContentButtons>
          <Modal.ButtonClose onClick={handleCloseQuiz} />
          {!isQuizCompleted && (
            <Modal.ButtonAction
              disabled={selectedAnswer === undefined}
              onClick={handleButtonAction}
              iconName={isAnswered ? "ArrowBigRight" : "Check"}
              title={isAnswered ? "Próxima" : "Responder"}
            />
          )}
        </Modal.ContentButtons>
      </Modal.Content>
    </Modal.Root>
  );
};
