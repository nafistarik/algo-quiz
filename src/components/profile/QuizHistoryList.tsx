/* eslint-disable */

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

interface QuizHistoryListProps {
  quizzes: any[]
}

export function QuizHistoryList({ quizzes }: QuizHistoryListProps) {
  if (quizzes.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">
          You haven&apos;t attempted any quizzes yet. Start quizzing to see your history!
        </p>
        <Button className="mt-4" asChild>
          <Link href="/">Browse Quizzes</Link>
        </Button>
      </div>
    )
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Quiz</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Score</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {quizzes.map((quiz) => (
          <TableRow key={quiz.id}>
            <TableCell className="font-medium">{quiz.title}</TableCell>
            <TableCell>{new Date(quiz.date).toLocaleDateString()}</TableCell>
            <TableCell>
              {quiz.score}/{quiz.totalQuestions} ({Math.round((quiz.score / quiz.totalQuestions) * 100)}%)
            </TableCell>
            <TableCell>
              <Badge variant={quiz.score / quiz.totalQuestions >= 0.7 ? "default" : "outline"}>
                {quiz.score / quiz.totalQuestions >= 0.7 ? "Passed" : "Failed"}
              </Badge>
            </TableCell>
            <TableCell className="text-right">
              <Button variant="outline" size="sm" asChild>
                <Link href={`/result/${quiz.resultId}`}>
                  View Results
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

