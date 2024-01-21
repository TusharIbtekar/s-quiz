import { create } from "zustand";
import { mockQuizes } from "./mockQuiz";
import { persist, devtools } from "zustand/middleware";

export type Quiz = {
  id: string;
  title: string;
  description: string;
  duration: number;
  questions: Question[];
};
export type Question = {
  id: string;
  title: string;
  options: Option[];
};
export type Option = {
  id: string;
  label: string;
  correctAnswer: boolean;
};

type State = { quizes: Quiz[] };

type Action = {
  addQuiz: (quiz: Quiz) => void;
  updateQuiz: (quiz: Quiz) => void;
  deleteQuiz: (quizId: string) => void;
};
const initialState: State = {
  quizes: mockQuizes,
};

export const useQuizStore = create<State & Action>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        addQuiz: (quiz) =>
          set((state) => ({
            quizes: [...state.quizes, quiz],
          })),
        updateQuiz: (quiz) =>
          set((state) => ({
            quizes: state.quizes.map((q) => (q.id === quiz.id ? quiz : q)),
          })),
        deleteQuiz: (quizId) =>
          set((state) => ({
            quizes: state.quizes.filter((q) => q.id !== quizId),
          })),
      }),
      { name: "quiz-storage" }
    )
  )
);
