"use client";

import ErrorMessage from "@/components/ErrorMessage";
import Loading from "@/components/Loading";
import { Quiz } from "@/lib/types";
import { useGetUserQuizzesQuery } from "@/redux/features/userQuizApi";
import EmptyStateMessage from "../../../components/EmptyStateMessage";
import RecentQuizCard from "./RecentQuizCard";

export function QuizHistoryList() {
  const {
    data: quizList,
    isLoading: quizListLoading,
    error: quizListError,
  } = useGetUserQuizzesQuery({});

  if (quizListLoading) return <Loading />;

  if (quizListError) {
    const errorMessage =
      "data" in quizListError
        ? (quizListError.data as { message?: string })?.message ??
          "An error occurred"
        : "An error occurred";
    return <ErrorMessage>{errorMessage}</ErrorMessage>;
  }

  const quizzes = quizList?.data?.filter(
    (quiz: Quiz) => quiz?.is_attempted === true
  );
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {quizzes.length === 0 ? (
          <EmptyStateMessage message="You haven't attempted any quizzes yet! Give one a try!" />
        ) : (
          quizzes?.map((quiz: Quiz) => (
            <RecentQuizCard quiz={quiz} key={quiz.id} />
          ))
        )}
      </div>
    </section>
  );
}