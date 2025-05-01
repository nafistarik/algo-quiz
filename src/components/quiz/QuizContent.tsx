"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Question } from "@/lib/types"

interface QuizContentProps {
  question: Question
  questionIndex: number
  totalQuestions: number
  selectedAnswer: string | undefined
  onAnswerSelect: (answerId: string) => void
  onNextQuestion: () => void
  onPrevQuestion: () => void
}

export function QuizContent({
  question,
  questionIndex,
  totalQuestions,
  selectedAnswer,
  onAnswerSelect,
  onNextQuestion,
  onPrevQuestion,
}: QuizContentProps) {

  return (
    <div className="flex-1 p-6 md:p-10">
      <div className="max-w-3xl">
        <div className="mb-8">
          <span className="text-sm text-muted-foreground">
            Question {questionIndex + 1} of {totalQuestions}
          </span>
          <h2 className="text-2xl font-bold mt-2">{question.question}</h2>
        </div>

        <Card>
          <CardContent className="pt-6">
            <RadioGroup value={selectedAnswer} onValueChange={onAnswerSelect} className="space-y-4 ">
              {question.options.map((option: string) => (
                <div
                  key={option}
                  className={`flex items-center space-x-2 rounded-lg border py-2 px-4 transition-all duration-300 ease-in-out ${
                    selectedAnswer === option ? "border-primary bg-primary" : "hover:bg-muted"
                  }`}
                >
                  <RadioGroupItem value={option} id={option} className="mt-0" />
                  <Label htmlFor={option} className="flex-1 cursor-pointer py-2">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>

        <div className="flex justify-between mt-8">
          <Button variant="outline" onClick={onPrevQuestion} disabled={questionIndex === 0}>
            <ChevronLeft className="mr-2 h-4 w-4" /> Previous
          </Button>
          <Button onClick={onNextQuestion} disabled={questionIndex === totalQuestions - 1}>
            Next <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

