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
import { useAuthStore } from "@/stores/user";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const quizes = useQuizStore((state) => state.quizes);
  const startQuiz = useResultStore((state) => state.startQuiz);
  const user = useAuthStore((state) => state.currentUser);
  const signOut = useAuthStore((state) => state.signOut);
  const results = useResultStore((state) => state.results[user!.id]);

  function handleStartQuiz(id: string) {
    const previousAttempts = results?.find((result) => result.quizId === id);
    if (!previousAttempts) {
      startQuiz(user!.id, quizes.find((quiz) => quiz.id === id) as Quiz);
    }
    navigate(`/quiz/${id}`);
  }

  const handleSignOut = () => {
    signOut();
    navigate("/signin");
  };

  return (
    <div>
      <Button variant="ghost" onClick={handleSignOut}>
        Sign out
      </Button>
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
    </div>
  );
}
