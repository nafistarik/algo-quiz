"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
import { quizDetails, quizResult1 } from "@/lib/data";
import { SiteHeader } from "@/components/SiteHeader";
import { ResultSummary } from "@/components/result/ResultSummary";
import { DetailedResults } from "@/components/result/DetailedResults";
import { QuizResult } from "@/lib/types";
import { mergeQuizData } from "@/lib/utils";

export default function ResultPage() {
  
    const mergedResult = mergeQuizData(quizDetails, quizResult1);
  const [result, setResult] = useState< QuizResult | null >(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setResult(mergedResult);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [mergedResult]);

  console.log(mergedResult,"kkkkkkkkkkkkkkkkkkkkk")

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
                <ResultSummary result={quizResult1} />
              </div>
              <div className="md:col-span-2">
                <DetailedResults result={result} />
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
