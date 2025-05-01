"use client";

import EmptyStateMessage from "../../../components/EmptyStateMessage";
import RecentQuizCard from "../../../components/home/RecentQuizCard";
import { useGetUserQuizzesQuery } from "@/redux/features/userQuizApi";
import Loading from "@/components/Loading";
import ErrorMessage from "@/components/ErrorMessage";
import { Quiz } from "@/lib/types";

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
