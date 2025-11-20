import { cn } from '@/lib/utils/utils'
import { useEffect } from 'react'
import { useModalQuiz } from './hooks/use-modal-quiz'
import { Modal } from '../modal'
import { Congratulations } from './components/congratulations'
import { PlayFeedback } from './components/ play-feedback'

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
  } = useModalQuiz()

  useEffect(() => {
    handleQuizCompletion()
  }, [handleQuizCompletion, isQuizCompleted])

  const response = currentQuestion.opcoes[currentQuestion.respostaCorreta]
  const handleButtonAction = isAnswered ? handleNextQuestion : handleSendAnswer

  return (
    <Modal.Root open={isOpenModal} onClose={handleCloseQuiz}>
      <Modal.Content>
        <Modal.Header title="Quiz" />
        <Modal.Body>
          {isQuizCompleted && <Congratulations />}
          {!isQuizCompleted && (
            <>
              <h2 className="mb-3 text-2xl">{currentQuestion.pergunta}</h2>
              {isAnswered && (
                <PlayFeedback gotRight={gotRight} response={response} />
              )}
              <div className="flex flex-col gap-2">
                {currentQuestion.opcoes.map((option, index) => (
                  <div
                    key={option}
                    className={cn('rounded-md px-3 py-2 font-bold outline', {
                      'bg-primary-300': index === selectedAnswer,
                      'hover:bg-primary-400 cursor-pointer': !isAnswered,
                      'bg-warning': isAnswered && index === selectedAnswer,
                      'bg-success':
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
              iconName={isAnswered ? 'ArrowBigRight' : 'Check'}
              title={isAnswered ? 'Próxima' : 'Responder'}
            />
          )}
        </Modal.ContentButtons>
      </Modal.Content>
    </Modal.Root>
  )
}
