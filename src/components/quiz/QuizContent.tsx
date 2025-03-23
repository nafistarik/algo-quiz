/* eslint-disable */
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface QuizContentProps {
  question: any
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
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <span className="text-sm text-muted-foreground">
            Question {questionIndex + 1} of {totalQuestions}
          </span>
          <h2 className="text-2xl font-bold mt-2">{question.text}</h2>
        </div>

        <Card>
          <CardContent className="pt-6">
            <RadioGroup value={selectedAnswer} onValueChange={onAnswerSelect} className="space-y-4">
              {question.options.map((option: any) => (
                <div
                  key={option.id}
                  className={`flex items-center space-x-2 rounded-lg border p-4 transition-colors ${
                    selectedAnswer === option.id ? "border-primary bg-primary/5" : "hover:bg-muted/50"
                  }`}
                >
                  <RadioGroupItem value={option.id} id={option.id} className="mt-0" />
                  <Label htmlFor={option.id} className="flex-1 cursor-pointer py-2">
                    {option.text}
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

