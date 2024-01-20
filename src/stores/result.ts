import { create } from "zustand";
import type { Option, Question, Quiz } from "./quiz";
import { nanoid } from "nanoid";
import { persist, createJSONStorage, devtools } from "zustand/middleware";

export type QuizResult = {
  quizId: string;
  answers: Answer[];
  duration?: number;
  score?: number;
  total: number;
};

type Answer = {
  id: string;
  question: Question;
  previousAnswers: string[];
  currentAnswer: string;
  correctAnswer: string;
};

type State = { results: Record<string, QuizResult[]> };

type Action = {
  addAnswer: (
    userId: string,
    quizId: string,
    question: Question,
    answer: string,
    isCorrectAnswer: boolean
  ) => void;
  startQuiz: (userId: string, quiz: Quiz) => void;
};

export const useResultStore = create<State & Action>()(
  devtools(
    persist(
      (set) => ({
        results: {},
        startQuiz: (userId, quiz) => {
          set((state) => {
            const result = state.results[userId];

            return {
              results: {
                ...state.results,
                [userId]: [
                  ...(result || []),
                  {
                    quizId: quiz.id,
                    answers: quiz.questions.map((q) => {
                      return {
                        id: nanoid(4),
                        question: q,
                        previousAnswers: [],
                        currentAnswer: "",
                        correctAnswer: "",
                      };
                    }),
                    total: quiz.questions.length,
                  },
                ],
              },
            };
          });
        },
        addAnswer: (userId, quizId, question, answer, isCorrectAnswer) => {
          set((state) => {
            const result = state.results[userId];
            let quizResult = result.find(
              (q) => q.quizId === quizId
            ) as QuizResult;
            const ans = quizResult.answers.find(
              (a) => a.question.id === question.id
            );
            if (ans) {
              const existsInPreviousAnswers =
                ans?.previousAnswers?.includes(answer);
              if (!existsInPreviousAnswers) {
                ans?.previousAnswers.push(answer);
              }
              if (isCorrectAnswer) {
                ans.correctAnswer = answer;
              } else {
                const correctAnswer = question.options.find(
                  (o) => o.correctAnswer
                ) as Option;
                ans.correctAnswer = correctAnswer?.id;
              }
              ans.currentAnswer = answer;
              quizResult = {
                ...quizResult,
                answers: quizResult.answers.map((a) =>
                  a.id === ans!.id ? ans : a
                ),
              };
            }
            return {
              results: {
                ...state.results,
                [userId]: result.map((r) =>
                  r.quizId === quizId ? quizResult : r
                ),
              },
            };
          });
        },
      }),
      { name: "quiz-results" }
    )
  )
);

// if (!result) {
//   return {
//     results: {
//       ...state.results,
//       [userId]: [
//         {
//           quizId: quiz.id,
//           answers: quiz.questions.map((q) => {
//             return {
//               id: nanoid(4),
//               question: q,
//               previousAnswers: [],
//             };
//           }),
//           total: quiz.questions.length,
//         },
//       ],
//     },
//   };
// }
