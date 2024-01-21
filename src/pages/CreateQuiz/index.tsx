import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { quizSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

type formData = z.infer<typeof quizSchema>;

const CreateQuiz = () => {
  const form = useForm<formData>({
    resolver: zodResolver(quizSchema),
    defaultValues: {
      title: "",
      description: "",
      duration: 0,
      questions: [
        {
          title: "",
          options: [
            {
              label: "",
              correctAnswer: false,
            },
          ],
        },
      ],
    },
  });
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Add Quiz</CardTitle>
      </CardHeader>
      <CardContent>
        <form {...form}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your quiz" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description">Description</Label>
              <Input id="Description" placeholder="Description for your quiz" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="duration">Duration</Label>
              <Input
                id="Duration"
                placeholder="Please give duration for your quiz in minutes"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>Create</Button>
      </CardFooter>
    </Card>
  );
};

export default CreateQuiz;
