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

export default function Admin() {
  const navigate = useNavigate();
  const quizes = useQuizStore((state) => state.quizes);
  const deleteQuiz = useQuizStore((state) => state.deleteQuiz);

  return (
    <>
      {quizes.map((quiz, index) => (
        <Card key={index} className="mb-5">
          <CardHeader>
            <CardTitle>{quiz.title}</CardTitle>
            <CardDescription>{quiz.description}</CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between">
            <p>Duration: {quiz.duration} minutes</p>
            <Button variant="destructive">Delete</Button>
          </CardFooter>
        </Card>
      ))}
      <Button onClick={() => navigate("create")}>Create New Quiz</Button>
    </>
  );
}