"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Heart } from "lucide-react"
import { useState } from "react"
import { popularQuizzes } from "@/lib/data"

export function PopularQuizzes() {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({})
  const quizzes = popularQuizzes

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          Popular Game <span className="text-primary">🔥</span>
        </h2>
        <Button variant="outline" asChild>
          <Link href="/">View All</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {quizzes?.map((quiz) => (
          <Card key={quiz.id} className="overflow-hidden transition-all hover:shadow-lg">
            <div
              className="h-32 bg-gradient-to-r from-primary to-secondary flex items-center justify-center p-4 relative"
              style={{
                backgroundColor: quiz.color || "#ea4c37",
              }}
            >
              <button
                className="absolute top-2 right-2 p-1.5 bg-white/10 backdrop-blur-sm rounded-full"
                onClick={() => toggleFavorite(quiz.id)}
              >
                <Heart className={`h-5 w-5 ${favorites[quiz.id] ? "fill-red-500 text-red-500" : "text-white"}`} />
              </button>
              <h3 className="text-xl font-bold text-white">{quiz.title}</h3>
            </div>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground mb-2">{quiz.description}</p>
              <div className="flex items-center justify-between text-sm">
                <span>{quiz.questionCount} questions</span>
                <span>{quiz.timeLimit} mins</span>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full" asChild>
                <Link href={`/quiz/${quiz.id}`}>Start Quiz</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

