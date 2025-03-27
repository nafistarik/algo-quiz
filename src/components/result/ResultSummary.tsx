import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BarChart2 } from "lucide-react";
import EmptyStateMessage from "../EmptyStateMessage";
import { QuizResult1 } from "@/lib/types";

export function ResultSummary({ result }: { result: QuizResult1 | null }) {
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
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="text-muted stroke-current"
                strokeWidth="8"
                cx="50"
                cy="50"
                r="45"
                fill="transparent"
              />
              <circle
                className="text-primary stroke-current"
                strokeWidth="8"
                strokeLinecap="round"
                cx="50"
                cy="50"
                r="45"
                fill="transparent"
                strokeDasharray={`${
                  Math.round(Number(result.percentage)) * 2.51
                } 251.2`}
                transform="rotate(-90 50 50)"
              />
              <text
                x="50"
                y="50"
                dominantBaseline="middle"
                textAnchor="middle"
                className="text-2xl font-bold "
                fill="currentColor"
              >
                {Math.round(Number(result.percentage))}%
              </text>
            </svg>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Quiz</span>
            <span className="font-medium">{result.quiz.title}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Total Questions</span>
            <span className="font-medium">{result.correct_answers.length}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Correct Answers</span>
            <span className="font-medium text-green-500">
              {(result.correct_answers.length * Number(result.percentage)) /
                100}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Wrong Answers</span>
            <span className="font-medium text-red-500">
              {result.correct_answers.length -
                (result.correct_answers.length * Number(result.percentage)) /
                  100}
            </span>
          </div>
        </div>

        <div className="pt-4 ">
          <Button className="w-full" asChild>
            <Link href={`/leaderboard/${result.quiz.id}`}>
              <BarChart2 className="mr-2 h-4 w-4" />
              View Leaderboard
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
