/* eslint-disable */

"use client";

import { LeaderboardList } from "@/components/leaderboard/LeaderboardList";
import { UserStats } from "@/components/leaderboard/UserStats";
import { useParams } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
import { defaultUser, leaderboardDatas } from "@/lib/data";
import { SiteHeader } from "@/components/SiteHeader";
import { AllPerformers } from "@/lib/types";

const allPerformers: AllPerformers[] = [];

leaderboardDatas?.attempts?.forEach((attempt) => {
  allPerformers.push({
    id: attempt.user.id,
    name: attempt.user.full_name,
    email: attempt.user.email,
    obtainedMarks: attempt.correct_answers.reduce(
      (sum, answer) => sum + answer.marks,
      0
    ),
    correctAnswers: attempt.correct_answers.length,
    wrongAnswers:
      attempt.submitted_answers.length - attempt.correct_answers.length,
    submittedAnswers: attempt.submitted_answers.length,
    avatar: "/placeholder.svg?height=100&width=100",
    rank: null,
    color: "#FFD700",
  });
});

allPerformers.sort((a, b) => b.obtainedMarks - a.obtainedMarks);

let rank = 1;
const rankColors = {
  1: "#FFD700",
  2: "#C0C0C0",
  3: "#CD7F32",
  default: "#4A90E2",
};

for (let i = 0; i < allPerformers.length; i++) {
  if (
    i > 0 &&
    allPerformers[i].obtainedMarks < allPerformers[i - 1].obtainedMarks
  ) {
    rank++;
  }

  allPerformers[i].rank = rank;
  allPerformers[i].color =
    rankColors[rank as keyof typeof rankColors] || rankColors.default;
}
let myPerformance: any = {};
allPerformers.forEach((performance: any) => {
  if (performance.id === defaultUser.id) {
    myPerformance = performance;
  }
});

export default function LeaderboardPage() {
  const params = useParams();
  const quizId = params.id as string;
  const [leaderboard, setLeaderboard] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLeaderboard(leaderboardDatas);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">
          Leaderboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {isLoading ? (
            <>
              <div className="md:col-span-1">
                <Skeleton className="h-[400px] w-full rounded-xl" />
              </div>
              <div className="md:col-span-2">
                <Skeleton className="h-[400px] w-full rounded-xl" />
              </div>
            </>
          ) : (
            <>
              <div className="md:col-span-1">
                <UserStats
                  leaderBoardData={leaderboard}
                  myPerformance={myPerformance}
                />
              </div>
              <div className="md:col-span-2">
                <LeaderboardList users={allPerformers || []} 
                  myPerformance={myPerformance}/>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
