import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { loginSchema } from "@/lib/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/stores/user";

type formData = z.infer<typeof loginSchema>;

export default function SignIn() {
  const saveUser = useAuthStore((state) => state.saveUser);
  const allUsers = useAuthStore((state) => state.users);
  const navigate = useNavigate();

  const form = useForm<formData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const signInUser = (email: string, password: string) => {
    const foundUser = allUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      saveUser(foundUser);
      foundUser.role === "user" ? navigate("/") : navigate("/admin");
    } else {
      form.setError("email", {
        type: "manual",
        message: "Email or password is incorrect",
      });
    }
  };

  function onSubmit(values: formData) {
    console.log(values);
    signInUser(values.email, values.password);
  }

  return (
    <Form {...form}>
      <div className="mx-auto w-fit text-center">
        <h1>Welcome to S-QUIZ</h1>
        <h2>Sign in to enter the quiz</h2>
      </div>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="youremail@example.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="******" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
