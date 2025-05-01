import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MergedResult } from "@/lib/types";
import { BarChart2 } from "lucide-react";
import Link from "next/link";
import EmptyStateMessage from "../EmptyStateMessage";

export function ResultSummary({ result }: { result: MergedResult | null }) {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const percentage = Math.round(Number(result?.percentage));
  const dashOffset = circumference - (percentage / 100) * circumference;

  if (!result)
    return (
      <EmptyStateMessage message="No results available. Try taking a quiz first!" />
    );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">Quiz Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex justify-center text-primary">
          <div className="relative w-40 h-40">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                className="text-muted stroke-current"
                strokeWidth="8"
                cx="50"
                cy="50"
                r="45"
                fill="transparent"
              />
              <circle
                className="text-primary stroke-current transition-all duration-500"
                strokeWidth="8"
                strokeLinecap="round"
                cx="50"
                cy="50"
                r="45"
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
                transform="rotate(-90 50 50)"
              />
              <text
                x="50"
                y="50"
                dominantBaseline="middle"
                textAnchor="middle"
                className="text-2xl font-bold"
                fill="currentColor"
              >
                {percentage}%
              </text>
            </svg>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Quiz</span>
            <span className="font-medium">{result?.title}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Total Questions</span>
            <span className="font-medium">{result?.totalQuestions}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Correct Answers</span>
            <span className="font-medium text-green-500">
              {result?.correctAnswers}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Wrong Answers</span>
            <span className="font-medium text-red-500">
              {result?.wrongAnswers}
            </span>
          </div>
        </div>

        <div className="pt-4 ">
          <Button className="w-full" asChild>
            <Link href={`/leaderboard/${result?.id}`}>
              <BarChart2 className="mr-2 h-4 w-4" />
              View Leaderboard
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
