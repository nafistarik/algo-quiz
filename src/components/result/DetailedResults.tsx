/* eslint-disable */

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"

interface DetailedResultsProps {
  result?: any
}

export function DetailedResults({ result }: DetailedResultsProps) {
  if (!result) return null

  return (
    <Card>
      <CardHeader>
        <CardTitle>Detailed Results</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {result.questions.map((question: any, index: number) => (
            <div key={question.id} className="border rounded-lg overflow-hidden">
              <div className="p-4 flex items-start justify-between gap-4 bg-muted/50">
                <div>
                  <span className="text-sm text-muted-foreground">Question {index + 1}</span>
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
                    className={`p-3 rounded-md flex items-center ${
                      option.id === question.correctAnswerId
                        ? "bg-green-500/10 border-green-500/20 border"
                        : option.id === question.userAnswerId && option.id !== question.correctAnswerId
                          ? "bg-red-500/10 border-red-500/20 border"
                          : "bg-muted/30"
                    }`}
                  >
                    {option.id === question.correctAnswerId && (
                      <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    )}
                    {option.id === question.userAnswerId && option.id !== question.correctAnswerId && (
                      <X className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                    )}
                    {option.id !== question.correctAnswerId && option.id !== question.userAnswerId && (
                      <div className="w-4 h-4 mr-2 flex-shrink-0" />
                    )}
                    <span>{option.text}</span>
                  </div>
                ))}
              </div>
              {question.explanation && (
                <div className="p-4 border-t bg-muted/20">
                  <p className="text-sm">
                    <span className="font-medium">Explanation: </span>
                    {question.explanation}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

