import { popularQuizzes } from "@/lib/data";
import QuizCard from "./QuizCard";
import EmptyStateMessage from "../EmptyStateMessage";

export function PopularQuizzes() {
  const quizzes = popularQuizzes;
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          Explore Quizzes
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {quizzes.length > 0 ? (
          quizzes?.map((quiz) => <QuizCard quiz={quiz} key={quiz.id} />)
        ) : (
          <EmptyStateMessage message="No quiz found" />
        )}
      </div>
    </section>
  );
}
