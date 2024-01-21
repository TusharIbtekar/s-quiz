import type { Question } from "@/stores/quiz";
import { Button } from "../ui/button";
import { useResultStore } from "@/stores/result";
import { useState } from "react";

interface Props {
  question: Question;
  onNext: () => void;
  onPrevious: () => void;
  isLast: boolean;
  quizId: string;
}
export default function SingleQuestion({
  question,
  isLast,
  quizId,
  onNext,
  onPrevious,
}: Props) {
  const addAnswer = useResultStore((state) => state.addAnswer);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const handleNext = () => {
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
          {question.options.map((question) => (
            <div key={question.id} className="flex items-center">
              <input
                id={question.id.toString()}
                // name={`${question.id}-selection`}
                name="question-selection"
                type="radio"
                onChange={(e) => handleOptionsSelect(e)}
                className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
              />
              <label
                htmlFor={question.id.toString()}
                className="ml-3 flex w-full justify-between leading-6 text-title"
              >
                <span className="text-lg">{question.label}</span>
              </label>
            </div>
          ))}
        </div>
      </fieldset>
      <div className="flex items-center p-6 pt-10 justify-between w-full">
        <Button
          variant="outline"
          className="mt-2"
          size="lg"
          onClick={onPrevious}
        >
          Previous
        </Button>{" "}
        <Button
          variant="default"
          className="mt-2"
          size="lg"
          onClick={() => handleNext()}
        >
          {isLast ? "Finish" : "Next"}
        </Button>
      </div>
    </>
  );
}
