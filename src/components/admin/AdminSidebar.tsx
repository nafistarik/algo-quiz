"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, PlusCircle, BarChart2, LogOut, Trophy } from "lucide-react"
import { useRouter } from "next/navigation"

export function AdminSidebar() {
  const router = useRouter()

  const handleLogout = () => {
    // Fake logout - just redirect to home
    router.push("/")
  }

  return (
    <div className="w-64 bg-primary/10 h-screen sticky top-0 p-6 hidden md:block">
      <div className="flex items-center gap-2 mb-10">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold">Quiz</span>
          <Trophy className="h-5 w-5 text-yellow-500" />
        </Link>
      </div>

      <nav className="space-y-2">
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link href="/admin/dashboard">
            <LayoutDashboard className="mr-2 h-5 w-5" />
            Dashboard
          </Link>
        </Button>
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link href="/admin/create-quiz">
            <PlusCircle className="mr-2 h-5 w-5" />
            Create Quiz
          </Link>
        </Button>
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link href="/admin/analytics">
            <BarChart2 className="mr-2 h-5 w-5" />
            Analytics
          </Link>
        </Button>
      </nav>

      <div className="absolute bottom-6 left-6 right-6">
        <Button variant="outline" className="w-full" onClick={handleLogout}>
          <LogOut className="mr-2 h-5 w-5" />
          Logout
        </Button>
      </div>
    </div>
  )
}

