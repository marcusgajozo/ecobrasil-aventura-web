import { useReducer } from "react";
import { quiz as quizData } from "../questions.json";
import { QuizAction, QuizState } from "../types";

const initialState: QuizState = {
  questions: [...quizData],
  currentQuestionIndex: Math.floor(Math.random() * quizData.length),
  questionsAnsweredCorrectly: 0,
  selectedOption: undefined,
};

const quizReducer = (state: QuizState, action: QuizAction) => {
  switch (action.type) {
    case "SELECT_OPTION":
      return { ...state, selectedOption: action.payload };

    case "NEXT_QUESTION": {
      const { selectedOption, currentQuestionIndex, questions } = state;

      if (selectedOption === undefined) return state;

      const isCorrect =
        selectedOption === questions[currentQuestionIndex].respostaCorreta;
      const updatedQuestions = questions.filter(
        (_, i) => i !== currentQuestionIndex
      );

      return {
        ...state,
        questions:
          updatedQuestions.length > 0 ? updatedQuestions : [...quizData], // Reset if empty
        currentQuestionIndex:
          updatedQuestions.length > 0
            ? Math.floor(Math.random() * updatedQuestions.length)
            : 0,
        questionsAnsweredCorrectly: isCorrect
          ? state.questionsAnsweredCorrectly + 1
          : state.questionsAnsweredCorrectly,
        selectedOption: undefined,
      };
    }

    case "RESET_QUIZ":
      return initialState;

    default:
      return state;
  }
};

export const useQuizReducer = () => {
  return useReducer(quizReducer, initialState);
};
