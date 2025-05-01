import React from "react";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface QuestionData {
  questionId: string;
  question: string;
  options: string[];
  correctAnswer: string;
}

interface QuestionCardProps {
  q: QuestionData;
  index: number;
  onEdit: (questionId: string) => void;
  onDelete: (questionId: string) => void;
  isDeleting: boolean;
}



const QuestionCard = ({q, index, onEdit, onDelete, isDeleting} : QuestionCardProps ) => {
  return (
    <>
      <Card key={q.questionId}>
        <CardHeader className="py-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">
              Q{index + 1}:{` `}
              {q.question}
            </CardTitle>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onEdit(q.questionId)}
              >
                Edit
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-red-500"
                onClick={() => onDelete(q.questionId)}
              >
                {isDeleting ? "Removing..." : "Remove"}
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="py-2 space-y-2">
          {q.options.map((option, idx) => (
            <div
              key={idx}
              className={`p-2 rounded-md text-sm ${
                option === q.correctAnswer
                  ? "bg-green-500/20 border-green-500/30 border"
                  : "bg-muted"
              }`}
            >
              {option}
              {option === q.correctAnswer && (
                <span className="ml-2 text-green-500 text-xs">(Correct)</span>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </>
  );
};

export default QuestionCard;
