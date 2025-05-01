"use client";
// import { popularQuizzes } from "@/lib/data";
import QuizCard from "./QuizCard";
import EmptyStateMessage from "../EmptyStateMessage";
import { useGetUserQuizzesQuery } from "@/redux/features/userQuizApi";
import Loading from "../Loading";
import ErrorMessage from "../ErrorMessage";
import { Quiz } from "@/lib/types";

export function PopularQuizzes() {
  // const quizzes = popularQuizzes;
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

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          Explore Quizzes
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {quizList?.data?.length > 0 ? (
          quizList?.data?.map((quiz: Quiz) => (
            <QuizCard quiz={quiz} key={quiz.id} />
          ))
        ) : (
          <EmptyStateMessage message="No quiz found" />
        )}
      </div>
    </section>
  );
}