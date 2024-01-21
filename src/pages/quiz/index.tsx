import { useParams } from "react-router-dom";
import Question from "../../components/quiz/Question";
import { useQuizStore } from "@/stores/quiz";

const Quiz = () => {
  const id = useParams().id;
  const quizes = useQuizStore((state) => state.quizes);
  const currentQuiz = quizes.find((quiz) => quiz.id === id);

  return (
    <>
      {currentQuiz && currentQuiz.questions && <Question quiz={currentQuiz} />}
    </>
  );
};

export default Quiz;
