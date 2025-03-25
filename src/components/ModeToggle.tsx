"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative h-8 w-14 rounded-full bg-muted p-1"
    >
      <div
        className={`flex h-6 w-6 items-center justify-center rounded-full bg-toggleBg transition-transform duration-300 ease-in-out  ${
          theme === "dark" ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4 " />}
      </div>
    </button>
  )
}

