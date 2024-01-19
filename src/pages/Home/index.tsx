import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { quizDetails } from "@/utils/helper";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface iQuiz {
  id: number;
  title: string;
  duration: number;
  description: string;
  questions: Question[];
}
interface Question {
  id: string;
  question: string;
  options: Option[];
}
interface Option {
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  correctAnswer: string;
}

export default function Home() {
  const [quizData, setQuizData] = useState<iQuiz[]>([]);
  const navigate = useNavigate();
  console.log(quizData);

  function handleStartQuiz(questions: Question[]) {
    navigate("/quiz", { state: { questions } });
  }

  useEffect(() => {
    setQuizData(quizDetails);
  }, []);

  return (
    <>
      {quizData.map((quiz, index) => (
        <Card key={index} className="mt-5">
          <CardHeader>
            <CardTitle>{quiz.title}</CardTitle>
            <CardDescription>{quiz.description}</CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between">
            <p>Duration: {quiz.duration} minutes</p>
            <Button onClick={() => handleStartQuiz(quiz.questions)}>
              Start
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
