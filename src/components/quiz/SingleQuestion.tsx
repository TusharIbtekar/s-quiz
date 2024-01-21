import type { Question } from "@/stores/quiz";
import { Button } from "../ui/button";
import { useResultStore } from "@/stores/result";
import { useEffect, useState } from "react";

interface Props {
  question: Question;
  onNext: () => void;
  isLast: boolean;
  quizId: string;
}
export default function SingleQuestion({
  question,
  isLast,
  quizId,
  onNext,
}: Props) {
  const addAnswer = useResultStore((state) => state.addAnswer);
  const [selectedOption, setSelectedOption] = useState<string>("");

  useEffect(() => {
    setSelectedOption("");
  }, [question]);

  const handleNext = () => {
    if (selectedOption === "") return;
    const isCorrect = question.options.find(
      (option) => option.id === selectedOption
    )?.correctAnswer as boolean;
    addAnswer("1", quizId, question, selectedOption, isCorrect);
    onNext();
  };

  const handleOptionsSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.id);
  };
  return (
    <>
      <div className="text-2xl text-center">{question.title}</div>
      <fieldset className="mt-4">
        <div className="space-y-4">
          {question.options.map((option) => (
            <div key={option.id} className="flex items-center">
              <input
                id={option.id.toString()}
                name="question-selection"
                type="radio"
                onChange={(e) => handleOptionsSelect(e)}
                className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
              />
              <label
                htmlFor={option.id.toString()}
                className="ml-3 flex w-full justify-between leading-6 text-title"
              >
                <span className="text-lg">{option.label}</span>
              </label>
            </div>
          ))}
        </div>
      </fieldset>
      <Button
        variant="default"
        className="mt-2 ml-auto"
        disabled={selectedOption === ""}
        size="lg"
        onClick={() => handleNext()}
      >
        {isLast ? "Finish" : "Next"}
      </Button>
    </>
  );
}
