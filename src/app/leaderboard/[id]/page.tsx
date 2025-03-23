/* eslint-disable */

"use client"

import { LeaderboardList } from "@/components/leaderboard/LeaderboardList"
import { UserStats } from "@/components/leaderboard/UserStats"
import { useParams } from "next/navigation"
import { Skeleton } from "@/components/ui/skeleton"
import { useEffect, useState } from "react"
import { leaderboardData } from "@/lib/data"
import { SiteHeader } from "@/components/SiteHeader"

export default function LeaderboardPage() {
  const params = useParams()
  const quizId = params.id as string
  const [leaderboard, setLeaderboard] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLeaderboard(leaderboardData)
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">
          Leaderboard
          <span className="text-primary text-2xl">🔥</span>
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
                <UserStats currentUser={leaderboard?.currentUser} quizStats={leaderboard?.quizStats} />
              </div>
              <div className="md:col-span-2">
                <LeaderboardList users={leaderboard?.topUsers || []} />
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  )
}

