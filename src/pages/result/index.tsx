import { useResultStore } from "@/stores/result";
import { useNavigate, useParams } from "react-router-dom";
import { Option } from "@/stores/quiz";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Result() {
  const results = useResultStore((state) => state.results);
  const id = useParams().id;
  const navigate = useNavigate();
  const userResults = results["1"];
  const userResult = userResults.find((result) => result.quizId === id);
  const score = userResult?.answers.reduce((acc, answer) => {
    if (answer.currentAnswer === answer.correctAnswer) {
      return acc + 1;
    }
    return acc;
  }, 0);
  return (
    <>
      <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Your Result
      </h1>
      <p className="scroll-m-20 text-xl tracking-tight mt-5">
        You scored {score} out of {userResult?.total}
      </p>
      {userResult?.answers.map((answer, index) => {
        return (
          <div key={index + answer.question.id}>
            <Card key={answer.question.id} className="my-5">
              <CardHeader>
                <CardTitle>{answer.question.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-800">
                  Correct Answer:{" "}
                  {
                    (
                      answer.question.options.find(
                        (o) => o.id === answer.correctAnswer
                      ) as Option
                    ).label
                  }
                </p>
                {answer.correctAnswer !== answer.currentAnswer && (
                  <p className="text-red-500">
                    Your Answer:{" "}
                    {
                      (
                        answer.question.options.find(
                          (o) => o.id === answer.currentAnswer
                        ) as Option
                      ).label
                    }
                  </p>
                )}
                {answer.previousAnswers.map((previousAnswer, index) => {
                  return (
                    <div key={index}>
                      {previousAnswer !== answer.currentAnswer && (
                        <p className="text-blue-500">
                          Previous Answer {index + 1} :{" "}
                          {
                            (
                              answer.question.options.find(
                                (o) => o.id === previousAnswer
                              ) as Option
                            ).label
                          }
                        </p>
                      )}
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        );
      })}
      <Button className="mb-5" onClick={() => navigate("/")}>
        Return to Home
      </Button>
    </>
  );
}
