/* eslint-disable */

"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { quizDetails } from "@/lib/data"
import { LoadingQuiz } from "@/components/quiz/LoadingQuiz"
import { QuizSidebar } from "@/components/quiz/QuizSidebar"
import { QuizContent } from "@/components/quiz/QuizContent"

export default function QuizPage() {
  const params = useParams()
  const quizId = params.id as string
  const quiz = quizDetails
  const [isLoading, setIsLoading] = useState(true)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [timeLeft, setTimeLeft] = useState(600) // 10 minutes in seconds

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isLoading) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          // Handle quiz submission when time is up
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isLoading])

  if (isLoading) {
    return <LoadingQuiz />
  }

  const handleAnswerSelect = (questionId: string, answerId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answerId,
    }))
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
    }
  }

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1)
    }
  }

  const currentQuestion = quiz.questions[currentQuestionIndex]
  const answeredCount = Object.keys(answers).length

  return (
    <div className="flex min-h-screen flex-col md:flex-row bg-background">
      <QuizSidebar
        quiz={quiz}
        timeLeft={timeLeft}
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={quiz.questions.length}
        answeredCount={answeredCount}
      />
      <QuizContent
        question={currentQuestion}
        questionIndex={currentQuestionIndex}
        totalQuestions={quiz.questions.length}
        selectedAnswer={answers[currentQuestion.id]}
        onAnswerSelect={(answerId) => handleAnswerSelect(currentQuestion.id, answerId)}
        onNextQuestion={handleNextQuestion}
        onPrevQuestion={handlePrevQuestion}
      />
    </div>
  )
}

