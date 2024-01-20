import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface iQuestion {
  id: string;
  question: string;
  options: Option[];
}

interface Option {
  label: string;
  correctAnswer?: boolean;
}

const Question = () => {
  const [selectedChoice, setSelectedChoice] = useState<number>(0);
  const [hasEnded, setHasEnded] = useState(false);
  const location = useLocation();
  const questions: iQuestion[] = location.state.questions;

  return (
    <>
      {questions.map((question: iQuestion, index: number) => (
        <div className="flex flex-col items-center justify-center w-full mt-4">
          <div className="text-2xl text-center">{question.question}</div>
          {question.options.map((option, index) => {
            return (
              <Button
                key={index}
                variant={selectedChoice === index ? "default" : "outline"}
                className="justify-start w-full py-8 mb-4"
                onClick={() => setSelectedChoice(index)}
              >
                <div className="flex items-center justify-start">
                  <div className="p-2 px-3 mr-5 border rounded-md">
                    {index + 1}
                  </div>
                  <div className="text-start">{option.label}</div>
                </div>
              </Button>
            );
          })}
          <Button
            variant="default"
            className="mt-2"
            size="lg"
            disabled={hasEnded}
            onClick={() => {
              // handleNext();
            }}
          >
            Next
          </Button>
        </div>
      ))}
    </>
  );
};

export default Question;
