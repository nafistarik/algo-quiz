import { HomeHero } from "@/components/home/HomeHero"
import { PopularQuizzes } from "@/components/home/PopularQuizzes"
import { RecentlyPlayed } from "@/components/home/RecentlyPlayed"
import { SiteHeader } from "@/components/SiteHeader"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main>
        <HomeHero />
        <div className="container py-8 space-y-10">
          <PopularQuizzes />
          <RecentlyPlayed />
        </div>
      </main>
    </div>
  )
}