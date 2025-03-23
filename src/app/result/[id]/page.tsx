/* eslint-disable */

"use client"

import { useParams } from "next/navigation"
import { Skeleton } from "@/components/ui/skeleton"
import { useEffect, useState } from "react"
import { quizResult } from "@/lib/data"
import { SiteHeader } from "@/components/SiteHeader"
import { ResultSummary } from "@/components/result/ResultSummary"
import { DetailedResults } from "@/components/result/DetailedResults"

export default function ResultPage() {
  const params = useParams()
  const resultId = params.id as string
  const [result, setResult] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setResult(quizResult)
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-8">Quiz Results</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {isLoading ? (
            <>
              <div className="md:col-span-1">
                <Skeleton className="h-[400px] w-full rounded-xl" />
              </div>
              <div className="md:col-span-2">
                <Skeleton className="h-[400px] w-full rounded-xl" />
              </div>
            </>
          ) : (
            <>
              <div className="md:col-span-1">
                <ResultSummary result={result} />
              </div>
              <div className="md:col-span-2">
                <DetailedResults result={result} />
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  )
}

