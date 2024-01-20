import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import Question from "./question";
import { useQuizStore } from "@/stores/quiz";

const Quiz = () => {
  const id = useParams().id;
  const quizes = useQuizStore((state) => state.quizes);
  const currentQuiz = quizes.find((quiz) => quiz.id === id);
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const handleNextQuestion = () => {
  //   setCurrentIndex((prev) => prev + 1);
  // };

  return (
    <>
      {currentQuiz && currentQuiz.questions && <Question quiz={currentQuiz} />}
    </>
  );
};

export default Quiz;
