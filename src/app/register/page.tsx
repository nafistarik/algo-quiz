import { RegisterForm } from "@/components/auth/RegisterForm"
import { SiteHeader } from "@/components/SiteHeader"
import Image from "next/image"
import Link from "next/link"

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <RegisterForm />
        </div>
        <div className="hidden md:flex md:w-1/2 bg-primary/10 flex-col items-center justify-center p-10 relative">
          <div className="absolute top-4 right-4">
            <Link href="/" className="text-primary hover:underline">
              ← Back to Home
            </Link>
          </div>
          <div className="max-w-md mx-auto text-center">
            <Image
              src="/placeholder.svg?height=300&width=300"
              width={300}
              height={300}
              alt="Quiz illustration"
              className="mx-auto mb-8"
            />
            <h2 className="text-3xl font-bold mb-4 text-foreground">Join Our Quiz Community</h2>
            <p className="text-muted-foreground">
              Create an account to track your progress, compete with friends, and climb the leaderboard.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

