import SingleQuestion from "@/components/quiz/SingleQuestion";
import type { Question, Quiz } from "@/stores/quiz";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  quiz: Quiz;
}

export default function Question({ quiz }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { questions } = quiz;
  const navigate = useNavigate();
  const handleNextQuestion = () => {
    if (currentIndex === questions.length - 1) {
      navigate(`/result/${quiz.id}`);
    }
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full mt-4">
      <SingleQuestion
        question={questions[currentIndex]}
        onNext={handleNextQuestion}
        isLast={currentIndex === questions.length - 1}
        quizId={quiz.id}
      />
    </div>
  );
}
