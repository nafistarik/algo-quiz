"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { recentlyPlayedQuizzes } from "@/lib/data"

export function RecentlyPlayed() {
  const quizzes = recentlyPlayedQuizzes

  if (!quizzes?.length) {
    return null
  }

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Recent Played</h2>
      </div>

      <div className="space-y-4">
        {quizzes?.map((quiz) => (
          <Card key={quiz.id} className="overflow-hidden transition-all hover:shadow-md">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div
                  className="h-12 w-12 rounded-full flex items-center justify-center text-white"
                  style={{
                    backgroundColor: quiz.color || "#ea4c37",
                  }}
                >
                  {quiz.icon || "🎮"}
                </div>
                <div>
                  <h3 className="font-medium">{quiz.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    Score: {quiz.score}/{quiz.totalQuestions}
                  </p>
                </div>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link href={`/quiz/${quiz.id}`}>
                  Play again
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

