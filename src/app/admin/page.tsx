/* eslint-disable */

"use client";

import { QuizList } from "@/app/admin/_components/QuizList";
import { Skeleton } from "@/components/ui/skeleton";
import { adminQuizzes } from "@/lib/data";
import { useEffect, useState } from "react";

export default function AdminDashboardPage() {
  const [quizzes, setQuizzes] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setQuizzes(adminQuizzes);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <main className="w-full">
        <h1 className="text-3xl font-bold mb-8">Quiz Dashboard</h1>
        {isLoading ? (
          <Skeleton className="h-[600px] w-full rounded-xl" />
        ) : (
          <QuizList quizzes={quizzes || []} />
        )}
      </main>
    </div>
  );
}
