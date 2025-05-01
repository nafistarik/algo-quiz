"use client";

import { useEffect, useState } from "react";
import { LoadingQuiz } from "@/components/quiz/LoadingQuiz";
import { QuizSidebar } from "@/components/quiz/QuizSidebar";
import { QuizContent } from "@/components/quiz/QuizContent";
import { usePathname, useRouter } from "next/navigation";
import {
  useGetQuizDetailsQuery,
  useSubmitQuizMutation,
} from "@/redux/features/userQuizApi";
import ErrorMessage from "@/components/ErrorMessage";
import { toast } from "sonner";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setResult } from "@/redux/slice/resultSlice";
import { mergeQuizData } from "@/lib/utils";

export default function QuizPage() {
  const router = useRouter();
  const pathName = usePathname();
  const quizId = pathName.split("/")[2];

  const [submitQuiz, { isLoading: quizSubmitLoading }] =
    useSubmitQuizMutation();

  const {
    data: quizDetails,
    isLoading: quizLoading,
    error: quizDetailsError,
  } = useGetQuizDetailsQuery(quizId);

  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);
  const quiz = quizDetails?.data;
  const totalQuestions = quiz?.questions.length ?? 0;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    if (quiz?.stats?.total_questions) {
      setTimeLeft(quiz.stats.total_questions * 60);
    }
  }, [quiz]);

  useEffect(() => {
    if (quizLoading) return;

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
  }, [quizLoading]);

  if (quizLoading) {
    return <LoadingQuiz />;
  }

  if (quizDetailsError) {
    const errorMessage =
      "data" in quizDetailsError
        ? (quizDetailsError.data as { message?: string })?.message ??
          "An error occurred"
        : "An error occurred";
    return <ErrorMessage>{errorMessage}</ErrorMessage>;
  }

  const handleAnswerSelect = (questionId: string, answerId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answerId,
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleSubmitQuiz = async () => {
    try {
      const response = await submitQuiz({ quizId, data: { answers } }).unwrap();
      const mergedData = mergeQuizData(quizDetails?.data, response?.data);
      dispatch(setResult({userId: user?.id , quizId: quizId, result: mergedData }));
      toast.success("Quiz submitted successfully");
      router.push(`/result/${quizId}`);
    } catch (error) {
      console.error("Error submitting quiz", error);
      toast.error("Error submitting quiz");
    }
  };

  const currentQuestion = quiz?.questions[currentQuestionIndex];
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="flex flex-col md:flex-row">
      <QuizSidebar
        timeLeft={timeLeft}
        quiz={quiz}
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={totalQuestions}
        answeredCount={answeredCount}
        onHandleSubmit={handleSubmitQuiz}
        quizSubmitLoading={quizSubmitLoading}
      />
      <QuizContent
        questionIndex={currentQuestionIndex}
        question={currentQuestion}
        totalQuestions={totalQuestions}
        onAnswerSelect={(answerId) =>
          handleAnswerSelect(currentQuestion.id, answerId)
        }
        onNextQuestion={handleNextQuestion}
        onPrevQuestion={handlePrevQuestion}
        selectedAnswer={answers[currentQuestion.id]}
      />
    </div>
  );
}
