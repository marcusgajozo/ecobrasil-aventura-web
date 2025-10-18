import { quiz as quizJson } from "@/assets/jsons/questions.json";
import { NAME_ISLAND } from "@/lib/constants/island";
import { create } from "zustand";

type ModalQuizStoreState = {
  questions: typeof quizJson;
  questionsAnsweredCorrectly: number;
  currentQuestionIndex: number;
};

type ModalQuizStoreActions = {
  handleResetQuiz: () => void;
  handleUpdateCurrentQuestionIndex: (
    gotRight: boolean,
    currentIsland: (typeof NAME_ISLAND)[number]
  ) => void;
};

type ModalQuizStore = ModalQuizStoreState & ModalQuizStoreActions;

const INITIAL_STATE: ModalQuizStoreState = {
  questions: quizJson,
  questionsAnsweredCorrectly: 0,
  currentQuestionIndex: 0,
};

export const useModalQuizStore = create<ModalQuizStore>((set) => ({
  ...INITIAL_STATE,
  handleResetQuiz: () => set({ ...INITIAL_STATE }),
  handleUpdateCurrentQuestionIndex: (gotRight, currentIsland) =>
    set((state) => {
      const { currentQuestionIndex, questions, questionsAnsweredCorrectly } =
        state;

      let questionsAnswered = questionsAnsweredCorrectly;
      let questionsFilter;

      if (gotRight) {
        questionsAnswered += 1;
        questionsFilter = questions[currentIsland].filter(
          (_, index) => index !== currentQuestionIndex
        );
      } else {
        questionsFilter = questions[currentIsland];
      }

      if (questionsFilter.length > 0) {
        return {
          currentQuestionIndex: Math.floor(
            Math.random() * questionsFilter.length
          ),
          questions: { ...questions, [currentIsland]: questionsFilter },
          questionsAnsweredCorrectly: questionsAnswered,
        };
      }

      return { ...INITIAL_STATE };
    }),
}));
