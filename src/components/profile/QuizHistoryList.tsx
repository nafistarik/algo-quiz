import { popularQuizzes } from "@/lib/data"
import EmptyStateMessage from "../EmptyStateMessage"
import RecentQuizCard from "../home/RecentQuizCard"

export function QuizHistoryList() {
    const quizzes = popularQuizzes.filter((quiz)=>quiz?.totalAttempts > 0);
    return (
      <section>
        <div className="space-y-4">
          {quizzes.length === 0 ? (
            <EmptyStateMessage message="You haven't attempted any quizzes yet! Give one a try!" />
          ) : (
            quizzes?.map((quiz) => <RecentQuizCard quiz={quiz} key={quiz.id} />)
          )}
        </div>
      </section>
    );
}

