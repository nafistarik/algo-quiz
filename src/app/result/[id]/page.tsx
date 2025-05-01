"use client";

import { Skeleton } from "@/components/ui/skeleton";
// import { useEffect, useState } from "react";
// import { quizDetails, quizResult } from "@/lib/data";
import { SiteHeader } from "@/components/SiteHeader";
import { ResultSummary } from "@/components/result/ResultSummary";
import { DetailedResults } from "@/components/result/DetailedResults";
// import { MergedResult } from "@/lib/types";
// import { mergeQuizData } from "@/lib/utils";
import { useAppSelector } from "@/redux/hooks";
import { selectResultByQuizId } from "@/redux/slice/resultSlice";
import { usePathname } from "next/navigation";

export default function ResultPage() {

  const pathName = usePathname();
  const quizId = pathName.split("/")[2];
  const user = useAppSelector((state) => state.user.user);
  const result = useAppSelector(selectResultByQuizId( user?.id, quizId));

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-8">Quiz Results</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {!result ? (
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
  );
}
