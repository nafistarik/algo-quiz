/* eslint-disable */

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Trophy, BarChart2 } from "lucide-react"

interface ResultSummaryProps {
  result?: any
}

export function ResultSummary({ result }: ResultSummaryProps) {
  if (!result) return null

  const percentage = Math.round((result.correctAnswers / result.totalQuestions) * 100)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Quiz Summary
          <Trophy className="h-5 w-5 text-yellow-500" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex justify-center">
          <div className="relative w-40 h-40">
            <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle
                className="text-muted stroke-current"
                strokeWidth="10"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
              />
              <circle
                className="text-primary stroke-current"
                strokeWidth="10"
                strokeLinecap="round"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                strokeDasharray={`${percentage * 2.51} 251.2`}
                transform="rotate(-90 50 50)"
              />
              <text x="50" y="50" dominantBaseline="middle" textAnchor="middle" className="text-3xl font-bold">
                {percentage}%
              </text>
            </svg>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Quiz</span>
            <span className="font-medium">{result.quizTitle}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Total Questions</span>
            <span className="font-medium">{result.totalQuestions}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Correct Answers</span>
            <span className="font-medium text-green-500">{result.correctAnswers}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Wrong Answers</span>
            <span className="font-medium text-red-500">{result.wrongAnswers}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Time Taken</span>
            <span className="font-medium">{result.timeTaken}</span>
          </div>
        </div>

        <div className="pt-4 space-y-2">
          <Button className="w-full" asChild>
            <Link href={`/leaderboard/${result.quizId}`}>
              <BarChart2 className="mr-2 h-4 w-4" />
              View Leaderboard
            </Link>
          </Button>
          <Button variant="outline" className="w-full" asChild>
            <Link href={`/quiz/${result.quizId}`}>Try Again</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

