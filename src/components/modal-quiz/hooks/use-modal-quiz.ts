import { useManagerIslandStore } from '@/lib/stores/use-manager-island-store'
import { useModalManagerStore } from '@/lib/stores/use-modal-manager-store'
import { useCallback, useMemo, useState } from 'react'
import { useModalQuizStore } from '../stores/use-modal-quiz-store'

export const useModalQuiz = () => {
  const currentIsland = useManagerIslandStore(state => state.currentIsland)
  const islandsInformation = useManagerIslandStore(
    state => state.islandsInformation
  )
  const modal = useModalManagerStore(state => state.modal)
  const questions = useModalQuizStore(state => state.questions)
  const currentQuestionIndex = useModalQuizStore(
    state => state.currentQuestionIndex
  )
  const questionsAnsweredCorrectly = useModalQuizStore(
    state => state.questionsAnsweredCorrectly
  )
  const [selectedAnswer, setSelectedAnswer] = useState<number | undefined>(
    undefined
  )
  const [gotRight, setGotRight] = useState<boolean | undefined>(undefined)

  const handleResetQuiz = useModalQuizStore(state => state.handleResetQuiz)
  const handleUpdateCurrentQuestionIndex = useModalQuizStore(
    state => state.handleUpdateCurrentQuestionIndex
  )
  const handleCloseModal = useModalManagerStore(state => state.handleCloseModal)
  const handleSaveIsland = useManagerIslandStore(
    state => state.handleSaveIsland
  )

  const isOpenModal = modal === 'quiz'
  const isAnswered = gotRight !== undefined

  const currentQuestion = useMemo(
    () => questions[currentIsland][currentQuestionIndex],
    [currentIsland, currentQuestionIndex, questions]
  )

  const isQuizCompleted = useMemo(
    () =>
      questionsAnsweredCorrectly === 3 ||
      islandsInformation[currentIsland].saved,
    [questionsAnsweredCorrectly, islandsInformation, currentIsland]
  )

  const handleCloseQuiz = () => {
    handleCloseModal()
    setGotRight(undefined)
    setSelectedAnswer(undefined)
  }

  const handleQuizCompletion = useCallback(() => {
    if (isQuizCompleted) {
      handleSaveIsland(currentIsland)
      handleResetQuiz()
    }
  }, [isQuizCompleted, handleSaveIsland, currentIsland, handleResetQuiz])

  const handleSelectAnswer = (index: number) => {
    if (gotRight !== undefined) return
    setSelectedAnswer(index)
  }

  const handleSendAnswer = () => {
    setGotRight(selectedAnswer === currentQuestion.respostaCorreta)
  }

  const handleNextQuestion = useCallback(() => {
    if (gotRight === undefined) return
    handleUpdateCurrentQuestionIndex(gotRight, currentIsland)
    setGotRight(undefined)
    setSelectedAnswer(undefined)
  }, [gotRight, handleUpdateCurrentQuestionIndex, currentIsland])

  return {
    isQuizCompleted,
    handleCloseQuiz,
    handleQuizCompletion,
    currentQuestion,
    handleSelectAnswer,
    selectedAnswer,
    handleSendAnswer,
    isOpenModal,
    handleNextQuestion,
    gotRight,
    isAnswered,
  }
}
