import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { quizSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { nanoid } from "nanoid";
import { Quiz, useQuizStore } from "@/stores/quiz";
import { useNavigate, useParams } from "react-router-dom";
import QuizForm from "@/components/quiz/QuizForm";

type formData = z.infer<typeof quizSchema>;

const EditQuiz = () => {
  const navigate = useNavigate();
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
