/* eslint-disable */

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Question, QuizResult } from "@/lib/types";
import { Check, X } from "lucide-react";

export function DetailedResults({ result }: { result: QuizResult | null }) {
  if (!result) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Detailed Results</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {result?.questions?.map((question: Question, index: number) => (
            <div
              key={question.id}
              className="border rounded-lg overflow-hidden"
            >
              <div className="p-4 flex items-start justify-between gap-4 bg-muted/50">
                <div>
                  <span className="text-sm text-muted-foreground">
                    Question {index + 1}
                  </span>
                  <h3 className="font-medium">{question.text}</h3>
                </div>
                {question.isCorrect ? (
                  <div className="flex items-center text-green-500 bg-green-500/10 px-3 py-1 rounded-full text-sm">
                    <Check className="h-4 w-4 mr-1" />
                    Correct
                  </div>
                ) : (
                  <div className="flex items-center text-red-500 bg-red-500/10 px-3 py-1 rounded-full text-sm">
                    <X className="h-4 w-4 mr-1" />
                    Incorrect
                  </div>
                )}
              </div>
              <div className="p-4 space-y-2">
                {question.options.map((option: any) => (
                  <div
                    key={option.id}
                    className={`p-2 px-4 rounded-md flex items-center ${
                      option.text === question.correctAnswer
                        ? "bg-green-500/40 "
                        : option.text === question.submittedAnswer &&
                          option.text !== question.correctAnswer
                        ? "bg-red-500/30 "
                        : "border"
                    }`}
                  >
                    {option.text === question.correctAnswer && (
                      <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    )}
                    {option.text === question.submittedAnswer &&
                      option.text !== question.correctAnswer && (
                        <X className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                      )}
                    {option.text !== question.correctAnswer &&
                      option.text !== question.submittedAnswer && (
                        <div className="w-4 h-4 mr-2 flex-shrink-0" />
                      )}
                    <span>{option.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
