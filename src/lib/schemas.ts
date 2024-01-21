import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export const quizSchema = z.object({
  title: z.string().min(5, { message: "Title must be at least 3 characters" }),
  description: z.string().min(10, { message: "Description is too short" }),
  duration: z
    .number()
    .min(1, { message: "Duration must be at least 1 minute" }),
  questions: z.array(
    z.object({
      title: z
        .string()
        .min(5, { message: "Title must be at least 5 characters" }),
      options: z.array(
        z.object({
          label: z
            .string()
            .min(1, { message: "Option must be at least 1 character" }),
          correctAnswer: z.boolean(),
        })
      ),
    })
  ),
});
