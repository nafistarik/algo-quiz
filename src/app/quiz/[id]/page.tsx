"use client";

import { useEffect, useState } from "react";
import { quizDetails } from "@/lib/data";
import { LoadingQuiz } from "@/components/quiz/LoadingQuiz";
import { QuizSidebar } from "@/components/quiz/QuizSidebar";
import { QuizContent } from "@/components/quiz/QuizContent";
import { SiteHeader } from "@/components/SiteHeader";

export default function QuizPage() {
  const quiz = quizDetails;
  const [isLoading, setIsLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [timeLeft, setTimeLeft] = useState(600);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isLoading]);

  if (isLoading) {
    return <LoadingQuiz />;
  }

  const handleAnswerSelect = (questionId: string, answerId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answerId,
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const answeredCount = Object.keys(answers).length;

  return (
    <>
      <SiteHeader />
      <div className="flex flex-col md:flex-row">
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
          onAnswerSelect={(answerId) =>
            handleAnswerSelect(currentQuestion.id, answerId)
          }
          onNextQuestion={handleNextQuestion}
          onPrevQuestion={handlePrevQuestion}
        />
      </div>
    </>
  );
}
