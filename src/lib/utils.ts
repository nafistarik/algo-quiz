/* eslint-disable */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Quiz, QuizResult } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDate = (isoString: string): string => {
  const date = new Date(isoString);
  return date.toISOString().split("T")[0];
};

export const formatReadableDate = (isoString: string): string => {
  const date = new Date(isoString);
  const months = [
    'Jan', 'Feb', 'March', 'April', 'May', 'June',
    'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month}, ${year}`;
};

export const formatRelativeTime = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (isNaN(diffInSeconds)) {
    return "Invalid date";
  }

  // Less than a minute
  if (diffInSeconds < 60) {
    return "Just now";
  }

  // Less than an hour
  if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  }

  // Less than a day
  if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  }

  // Less than a week
  if (diffInSeconds < 604800) {
    const days = Math.floor(diffInSeconds / 86400);
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  }

  // Format as date
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

export const mergeQuizData = (quizDetails: Quiz, quizResult: QuizResult) => {
  const questions = quizDetails.questions.map((question) => {

    const submitted = quizResult.submitted_answers.find(
      (a) => a.question_id === question.id
    );
    const correct = quizResult.correct_answers.find(
      (a) => a.question_id === question.id
    );
    const isCorrect =
      correct && submitted && correct.answer === submitted.answer;

    return {
      id: question.id,
      question: question.question,
      options: question.options,
      correctAnswer: correct ? correct.answer : null,
      submittedAnswer: submitted ? submitted.answer : null,
      isCorrect: isCorrect || false,
    };
  });

  const totalQuestions = questions.length;
  const correctAnswers = questions.filter((q) => q.isCorrect).length;
  const wrongAnswers = totalQuestions - correctAnswers;

  return {
    id: quizDetails.id,
    title: quizDetails.title,
    percentage: quizResult.percentage,
    totalQuestions,
    correctAnswers,
    wrongAnswers,
    questions,
  };
};



/*

  // first of all I need to find out the array of id's for the quizes I have given from popular quizes which are filter out by isAttempted!
  const attemptedQuizesIds = popularQuizes.filter(quiz => quiz.totalAttempts > 0).map(quiz => quiz.id);

  // now based on this array I need call the api for each quiz result
  const fetchAllQuizResults = (attemptedQuizesIds) => {
    const results = [];
    for (let i = 0; i < attemptedQuizesIds.length; i++) {
      const result = fetchAllQuizResults(attemptedQuizesIds[i]);
      results.push(result);
    }
    return results;
  }

  // now I need to call the api for each quiz result
  myQuizResults = fetchAllQuizResults(attemptedQuizesIds);

*/

export function transformAttempts(data: any) {

  const attempts = data?.attempts;

  const result = attempts.map((attempt: any) => {
    const { user, submitted_answers, correct_answers } = attempt;

    // Create a Map for quick lookup of correct answers by question_id
    const correctAnswerMap = new Map();
    correct_answers.forEach((item: any) => {
      correctAnswerMap.set(item.question_id, item);
    });

    let correctCount = 0;
    let obtainedMarks = 0;

    // Compare each submitted answer to correct answer
    submitted_answers.forEach((submitted: any) => {
      const correct = correctAnswerMap.get(submitted.question_id);

      // Trim and compare to avoid trailing space mismatches
      if (correct && submitted.answer.trim() === correct.answer.trim()) {
        correctCount++;
        obtainedMarks += correct.marks || 0;
      }
    });

    const submittedCount = submitted_answers.length;
    const wrongCount = submittedCount - correctCount;

    return {
      id: user.id,
      name: user.full_name,
      email: user.email,
      obtainedMarks,
      correctAnswers: correctCount,
      wrongAnswers: wrongCount,
      submittedAnswers: submittedCount,
      avatar: "/placeholder.svg?height=100&width=100",
      rank: 1, // You can calculate real rank later
      color: "#FFD700", // Add logic for different ranks/colors later
    };
  });

  return result;
}
