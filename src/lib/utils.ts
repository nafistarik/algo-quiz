import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Quiz, QuizResult } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

export const mergeQuizData = (quizDetails: Quiz, quizResult: QuizResult) => {
  const mergedResult = {
    ...quizDetails,
    questions: quizDetails.questions.map((question) => {
      const submittedAnswer = quizResult.submitted_answers.find(
        (answer) => answer.question_id === question.id
      );
      const correctAnswer = quizResult.correct_answers.find(
        (answer) => answer.question_id === question.id
      );
      const isCorrect = correctAnswer && submittedAnswer && correctAnswer.answer === submittedAnswer.answer;
      return {
        ...question,
        submittedAnswer: submittedAnswer ? submittedAnswer.answer : null,
        correctAnswer: correctAnswer ? correctAnswer.answer : null,
        marksAwarded: correctAnswer ? correctAnswer.marks : 0,
        isCorrect,
      };
    }),
  };
  return mergedResult;
};
