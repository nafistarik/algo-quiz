"use client"

import QuestionCard from "./QuestionCard"

interface QuestionListProps {
  questions: Array<{
    questionId: string
    question: string
    options: string[]
    correctAnswer: string
  }>
  onEdit: (questionId: string) => void
  onDelete: (questionId: string) => void
  isDeleting: boolean
}

export function QuestionList({ questions, onEdit, onDelete, isDeleting }: QuestionListProps) {
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
            <QuestionCard key={q.questionId} q = {q} index={index} onEdit={onEdit} onDelete={onDelete} isDeleting={isDeleting}/>
          ))}
        </div>
      )}
    </div>
  )
}