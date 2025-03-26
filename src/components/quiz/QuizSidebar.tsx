/* eslint-disable */

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Clock } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { formatTime } from "@/lib/utils"

interface QuizSidebarProps {
  quiz: any
  timeLeft: number
  currentQuestionIndex: number
  totalQuestions: number
  answeredCount: number
}

export function QuizSidebar({ quiz, timeLeft, currentQuestionIndex, totalQuestions, answeredCount }: QuizSidebarProps) {
  const progress = (answeredCount / totalQuestions) * 100;

  return (
    <div className="w-full md:w-80 bg-muted p-6 flex flex-col md:h-screen md:sticky md:top-0">
      <div className="flex items-center gap-2 mb-8">
        <h1 className="text-2xl font-bold mt-4">{quiz.title}</h1>
      </div>

      <div className="space-y-6 flex-1">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Time Remaining</span>
            <span className="font-medium flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              {formatTime(timeLeft)}
            </span>
          </div>
          <Progress value={(timeLeft / (quiz.timeLimit * 60)) * 100} className="h-2" />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span className="font-medium">
              {answeredCount}/{totalQuestions} questions
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="mt-6 ">
          <h3 className="font-medium mb-2">Question Navigation</h3>
          <div className="flex flex-wrap gap-4 overflow-hidden w-full">
            {Array.from({ length: totalQuestions }).map((_, i) => (
              <Button
                key={i}
                variant={i === currentQuestionIndex ? "default" : "outline"}
                size="sm"
                className="h-8 w-8 p-0"
              >
                {i + 1}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-auto py-6">
        <Button className="w-full" asChild>
          <Link href={`/result/${quiz.id}`}>Submit Quiz</Link>
        </Button>
      </div>
    </div>
  )
}

