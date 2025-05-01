/* eslint-disable */

"use client";

import { LeaderboardList } from "@/components/leaderboard/LeaderboardList";
import { UserStats } from "@/components/leaderboard/UserStats";
import { usePathname } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import { SiteHeader } from "@/components/SiteHeader";
import { AllPerformers } from "@/lib/types";
import { useGetLeaderboardQuery } from "@/redux/features/userQuizApi";
import { useAppSelector } from "@/redux/hooks";
import { transformAttempts } from "@/lib/utils";

export default function LeaderboardPage() {
  // const allPerformers: AllPerformers[] = [];

  const pathName = usePathname();
  const quizId = pathName.split("/")[2];

  const user = useAppSelector((state) => state.user.user);
  const {data : leaderboardData, isLoading:leaderboardLoading, error: leaderboardError} = useGetLeaderboardQuery(quizId);



  // leaderboardData?.data?.attempts?.forEach((attempt: any) => {
  //   allPerformers.push({
  //     id: attempt.user.id,
  //     name: attempt.user.full_name,
  //     email: attempt.user.email,
  //     obtainedMarks: attempt.correct_answers.reduce(
  //       (sum: any, answer: any) => sum + answer.marks,
  //       0
  //     ),
  //     correctAnswers: attempt.correct_answers.length,
  //     wrongAnswers:
  //       attempt.submitted_answers.length - attempt.correct_answers.length,
  //     submittedAnswers: attempt.submitted_answers.length,
  //     avatar: "/placeholder.svg?height=100&width=100",
  //     rank: null,
  //     color: "#FFD700",
  //   });
  // });

  const allPerformers = leaderboardData ? transformAttempts(leaderboardData?.data) : [];

  allPerformers.sort((a :any, b: any) => b.obtainedMarks - a.obtainedMarks);


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
    if (performance.id === user?.id) {
      myPerformance = performance;
    }
  });

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">
          Leaderboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaderboardLoading ? (
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
                  leaderBoardData={leaderboardData?.data}
                  myPerformance={myPerformance}
                />
              </div>
              <div className="md:col-span-2">
                <LeaderboardList
                  users={allPerformers || []}
                  myPerformance={myPerformance}
                />
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
