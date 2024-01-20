import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Quiz, useQuizStore } from "@/stores/quiz";
import { useResultStore } from "@/stores/result";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const quizes = useQuizStore((state) => state.quizes);
  const startQuiz = useResultStore((state) => state.startQuiz);

  function handleStartQuiz(id: string) {
    startQuiz("1", quizes.find((quiz) => quiz.id === id) as Quiz);
    navigate(`/quiz/${id}`);
  }

  return (
    <>
      {quizes.map((quiz, index) => (
        <Card key={index} className="mt-5">
          <CardHeader>
            <CardTitle>{quiz.title}</CardTitle>
            <CardDescription>{quiz.description}</CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between">
            <p>Duration: {quiz.duration} minutes</p>
            <Button onClick={() => handleStartQuiz(quiz.id)}>Start</Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
