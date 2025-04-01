/* eslint-disable */

"use client";

import { QuizAnalytics } from "@/components/admin/QuizAnalytics";
import { Skeleton } from "@/components/ui/skeleton";
import { analyticsData } from "@/lib/data";
import { useEffect, useState } from "react";

export default function AnalyticsPage() {
  const [analytics, setAnalytics] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setAnalytics(analyticsData);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className=" min-h-screen bg-background">
      {/* <AdminSidebar /> */}
      <main className="">
        <h1 className="text-3xl font-bold mb-8">Quiz Analytics</h1>
        {isLoading ? (
          <Skeleton className="h-[600px] w-full rounded-xl" />
        ) : (
          <QuizAnalytics data={analytics} />
        )}
      </main>
    </div>
  );
}
