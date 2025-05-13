import { quiz } from "./questions.json";

export interface QuizState {
  questions: typeof quiz;
  currentQuestionIndex: number;
  questionsAnsweredCorrectly: number;
  selectedOption?: number;
}

export type QuizAction =
  | { type: "SELECT_OPTION"; payload: number }
  | { type: "NEXT_QUESTION" }
  | { type: "RESET_QUIZ" };
