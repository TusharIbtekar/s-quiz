import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { useNavigate } from "react-router-dom";
import DeleteButton from "./DeleteButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

type formData = z.infer<typeof quizSchema>;

type Props = {
  quiz?: formData;
  isEdit?: boolean;
  quizId?: string;
};

const initialQuestion = {
  title: "",
  options: {
    0: { label: "" },
    1: { label: "" },
    2: { label: "" },
    3: { label: "" },
  },
  correctAnswer: "",
};

export default function QuizForm({ quiz, isEdit = false, quizId }: Props) {
  const addQuiz = useQuizStore((state) => state.addQuiz);
  const deleteQuiz = useQuizStore((state) => state.deleteQuiz);
  const navigate = useNavigate();

  const form = useForm<formData>({
    resolver: zodResolver(quizSchema),
    defaultValues: quiz || {
      title: "",
      description: "",
      duration: 0,
      questions: [initialQuestion],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "questions",
  });

  function onSubmit(values: formData) {
    const quiz: Quiz = {
      id: nanoid(4),
      title: values.title,
      description: values.description,
      duration: values.duration,
      questions: values.questions.map((question) => ({
        id: nanoid(4),
        title: question.title,
        options: Object.entries(question.options).map(([key, value]) => ({
          id: nanoid(4),
          label: value.label,
          correctAnswer: question.correctAnswer === key,
        })),
      })),
    };
    if (quizId) {
      deleteQuiz(quizId);
    }
    addQuiz(quiz);
    navigate("/admin");
    console.log(values);
  }

  const handleRemove = (index: number | string) => {
    remove(Number(index));
  };
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>{isEdit ? "Edit Quiz" : "Add Quiz"}</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quiz Name</FormLabel>
                    <FormControl>
                      <Input
                        type="string"
                        placeholder="Name of your quiz"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input
                        type="string"
                        placeholder="Description for your quiz"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Duration</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Please give duration for your quiz in minutes"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {fields.map((field, index) => (
                <div key={field.id}>
                  <Accordion
                    type="single"
                    collapsible
                    defaultValue={String(index)}
                  >
                    <AccordionItem
                      value={String(index)}
                      // data-state={isEdit ? "closed" : "open"}
                    >
                      <AccordionTrigger>
                        {`Question ${index + 1}`}
                      </AccordionTrigger>
                      <AccordionContent>
                        <FormField
                          control={form.control}
                          name={`questions.${index}.title`}
                          render={({ field }) => (
                            <FormItem>
                              {/* <FormLabel>{`Question ${index + 1}`}</FormLabel> */}
                              <FormControl>
                                <Input
                                  type="string"
                                  placeholder="Question Title"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`questions.${index}.options.0.label`}
                          render={({ field }) => (
                            <FormItem className="mt-2">
                              <FormLabel>Option 1</FormLabel>
                              <FormControl>
                                <Input
                                  type="string"
                                  placeholder=""
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`questions.${index}.options.1.label`}
                          render={({ field }) => (
                            <FormItem className="mt-2">
                              <FormLabel>Option 2</FormLabel>
                              <FormControl>
                                <Input
                                  type="string"
                                  placeholder=""
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`questions.${index}.options.2.label`}
                          render={({ field }) => (
                            <FormItem className="mt-2">
                              <FormLabel>Option 3</FormLabel>
                              <FormControl>
                                <Input
                                  type="string"
                                  placeholder=""
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`questions.${index}.options.3.label`}
                          render={({ field }) => (
                            <FormItem className="mt-2">
                              <FormLabel>Option 4</FormLabel>
                              <FormControl>
                                <Input
                                  type="string"
                                  placeholder=""
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`questions.${index}.correctAnswer`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Select Correct Answer</FormLabel>
                              <Select onValueChange={field.onChange}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select correct option" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="0">Option 1</SelectItem>
                                  <SelectItem value="1">Option 2</SelectItem>
                                  <SelectItem value="2">Option 3 </SelectItem>
                                  <SelectItem value="3">Option 4 </SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                              {isEdit && (
                                <p className="text-destructive text-sm">
                                  Please Select Correct Answer Again
                                </p>
                              )}
                            </FormItem>
                          )}
                        />
                        <DeleteButton
                          id={String(index)}
                          onDelete={handleRemove}
                        />
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              ))}
            </div>
            <div className="flex justify-between">
              <Button
                onClick={() => append(initialQuestion)}
                className="mt-5"
                type="button"
              >
                Add more questions
              </Button>
              <Button className="mt-5" type="submit">
                {isEdit ? "Save" : "Create"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
