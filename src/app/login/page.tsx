import { LoginForm } from "@/components/auth/LoginForm"
import { SiteHeader } from "@/components/SiteHeader"
import Image from "next/image"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 flex">
        <div className="hidden md:flex md:w-1/2 bg-primary/10 flex-col items-center justify-center p-10 relative">
          <div className="absolute top-4 left-4">
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
            <h2 className="text-3xl font-bold mb-4 text-foreground">Test Your Knowledge</h2>
            <p className="text-muted-foreground">
              Join our community of quiz enthusiasts and challenge yourself with fun and educational quizzes.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <LoginForm />
        </div>
      </main>
    </div>
  )
}

