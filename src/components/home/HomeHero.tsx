import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Trophy } from "lucide-react"

export function HomeHero() {
  return (
    <div className="bg-gradient-to-b from-primary/20 to-background py-16 md:py-24">
      <div className="container flex flex-col items-center text-center">
        <div className="flex items-center gap-2 mb-6">
          <h1 className="text-5xl md:text-6xl font-bold">Quiz</h1>
          <Trophy className="h-10 w-10 text-yellow-500" />
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mb-8">
          Challenge your friends and family with our fun quiz app. See who comes out on top as the ultimate quiz
          champion, and earn the bragging rights!
        </p>
        <Button size="lg" asChild>
          <Link href="/quiz/1">Get started</Link>
        </Button>
      </div>
    </div>
  )
}

