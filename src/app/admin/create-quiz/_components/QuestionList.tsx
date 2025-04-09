"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface QuestionListProps {
  questions: Array<{
    questionId: string
    question: string
    options: string[]
    correctAnswer: string
  }>
  onEdit: (questionId: string) => void
  onDelete: (questionId: string) => void
}

export function QuestionList({ questions, onEdit, onDelete }: QuestionListProps) {
  return (
    <div className="mt-8 space-y-4">
      <h3 className="text-lg font-medium">Questions ({questions.length})</h3>
      
      {questions.length === 0 ? (
        <div className="text-center py-8 border rounded-lg bg-muted/50">
          <p className="text-muted-foreground">No questions added yet.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {questions.map((q,index) => (
            <Card key={q.questionId}>
              <CardHeader className="py-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">Q{index+1}:{` `}{q.question}</CardTitle>
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
                      Remove
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
          ))}
        </div>
      )}
    </div>
  )
}