import { popularQuizzes } from "@/lib/data";
import EmptyStateMessage from "../EmptyStateMessage";
import RecentQuizCard from "./RecentQuizCard";

export function RecentlyPlayed() {
  const quizzes = popularQuizzes;
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Recent Played</h2>
      </div>
      <div className="space-y-4">
        {quizzes.length === 0 ? (
          <EmptyStateMessage message="You haven't attempted any quizzes yet! Give one a try!" />
        ) : (
          quizzes?.filter((quiz)=>quiz?.totalAttempts > 0).map((quiz) => <RecentQuizCard quiz={quiz} key={quiz.id} />)
        )}
      </div>
    </section>
  );
}