"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { popularQuizzes } from "@/lib/data"

export function PopularQuizzes() {

  const quizzes = popularQuizzes;

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
        Explore Quizzes <span className="text-primary">🔥</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {quizzes?.map((quiz) => (
          <Card key={quiz.id} className="overflow-hidden transition-all hover:shadow-lg flex flex-col justify-between">
            <div
              className="h-40 bg-gradient-to-r from-primary to-secondary flex items-center justify-center p-4 relative"
              style={{
                backgroundColor: quiz.color || "#ea4c37",
              }}
            >
              <h3 className="text-xl font-bold text-white">{quiz.title}</h3>
            </div>
<div>            <CardContent className="p-4">
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
            </CardFooter></div>
          </Card>
        ))}
      </div>
    </section>
  )
}

