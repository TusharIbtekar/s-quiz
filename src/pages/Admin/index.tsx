import DeleteButton from "@/components/quiz/DeleteButton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useQuizStore } from "@/stores/quiz";
import { useAuthStore } from "@/stores/user";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const navigate = useNavigate();
  const quizes = useQuizStore((state) => state.quizes);
  const deleteQuiz = useQuizStore((state) => state.deleteQuiz);
  const signOut = useAuthStore((state) => state.signOut);

  const handleEdit = (id: string) => {
    navigate(`edit/${id}`);
  };

  const handleDeleteQuiz = (quizId: string) => {
    deleteQuiz(quizId);
  };

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
        <Card key={index} className="mb-5">
          <CardHeader>
            <CardTitle>{quiz.title}</CardTitle>
            <CardDescription>{quiz.description}</CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between">
            <p>Duration: {quiz.duration} minutes</p>
            <DeleteButton id={quiz.id} onDelete={handleDeleteQuiz} />
            <Button onClick={() => handleEdit(quiz.id)}>Edit</Button>
          </CardFooter>
        </Card>
      ))}
      <Button onClick={() => navigate("create")}>Create New Quiz</Button>
    </div>
  );
}
