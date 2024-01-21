import { quizSchema } from "@/lib/schemas";
import { z } from "zod";
import { Quiz, useQuizStore } from "@/stores/quiz";
import { useParams } from "react-router-dom";
import QuizForm from "@/components/quiz/QuizForm";

type formData = z.infer<typeof quizSchema>;

const EditQuiz = () => {
  const quizId = useParams().id;
  const quiz = useQuizStore(
    (state) => state.quizes.find((q) => q.id === quizId) as Quiz
  );

  const formattedQuiz: formData = {
    title: quiz.title,
    description: quiz.description,
    duration: quiz.duration,
    questions: quiz.questions.map((question) => ({
      title: question.title,
      options: {
        0: { label: question.options[0].label },
        1: { label: question.options[1].label },
        2: { label: question.options[2].label },
        3: { label: question.options[3].label },
      },
      correctAnswer: String(
        question.options.findIndex((option) => option.correctAnswer)
      ),
    })),
  };

  return (
    <>
      {formattedQuiz && (
        <QuizForm quiz={formattedQuiz} isEdit={true} quizId={quiz.id} />
      )}
    </>
  );
};

export default EditQuiz;
