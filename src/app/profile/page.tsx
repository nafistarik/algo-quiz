/* eslint-disable */

"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"
import { QuizHistoryList } from "@/components/profile/QuizHistoryList"
import { useEffect, useState } from "react"
import { userProfile } from "@/lib/data"
import { SiteHeader } from "@/components/SiteHeader"
import { UserAchievements } from "@/components/profile/UserAchievements"

export default function ProfilePage() {
  const [profile, setProfile] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setProfile(userProfile)
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 container py-8">
        <div className="mb-8">
          {isLoading ? (
            <div className="flex items-center gap-4">
              <Skeleton className="h-20 w-20 rounded-full" />
              <div>
                <Skeleton className="h-8 w-48 mb-2" />
                <Skeleton className="h-4 w-32" />
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src={profile?.avatar} alt={profile?.name} />
                <AvatarFallback className="text-xl">
                  {profile?.name
                    .split(" ")
                    .map((n: string) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-3xl font-bold">{profile?.name}</h1>
                <p className="text-muted-foreground">{profile?.email}</p>
              </div>
            </div>
          )}
        </div>

        <Tabs defaultValue="history" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="history">Quiz History</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>
          <TabsContent value="history">
            {isLoading ? (
              <Skeleton className="h-[400px] w-full rounded-xl" />
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>Your Quiz History</CardTitle>
                </CardHeader>
                <CardContent>
                  <QuizHistoryList quizzes={profile?.quizHistory || []} />
                </CardContent>
              </Card>
            )}
          </TabsContent>
          <TabsContent value="achievements">
            {isLoading ? (
              <Skeleton className="h-[400px] w-full rounded-xl" />
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>Your Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <UserAchievements achievements={profile?.achievements || []} />
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

