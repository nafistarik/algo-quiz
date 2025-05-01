/* eslint-disable */

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import EmptyStateMessage from "../../../components/EmptyStateMessage";
import { DeleteQuizDialog } from "./DeleteQuizDialog";
import { EditQuizDialog } from "./EditQuizDialog";
import { Button } from "@/components/ui/button";
import { formatRelativeTime } from "@/lib/utils";
import { Pencil, Trash2 } from "lucide-react";

export default function AllQuizzes({ quizzes }: any) {
  const [editingQuiz, setEditingQuiz] = useState<any | null>(null);
  const [deletingQuiz, setDeletingQuiz] = useState<any | null>(null);
  return (
    <div className="border rounded-lg w-full overflow-x-auto">
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Questions</TableHead>
            <TableHead>Created</TableHead>
            <TableHead>Updated</TableHead>
            <TableHead className="w-[80px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {quizzes?.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="text-center pt-8">
                <EmptyStateMessage message="You havent created any quizzes yet!" />
              </TableCell>
            </TableRow>
          ) : (
            quizzes?.map((quiz: any) => (
              <TableRow key={quiz.id}>
                <TableCell className="font-medium">{quiz.title}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      quiz.status === "published" ? "default" : "outline"
                    }
                  >
                    {quiz.status === "published" ? "Published" : "Draft"}
                  </Badge>
                </TableCell>
                <TableCell>{quiz.Questions.length}</TableCell>
                <TableCell>{formatRelativeTime(quiz.createdAt)}</TableCell>
                <TableCell>{formatRelativeTime(quiz.updatedAt)}</TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    className="h-8 w-8 p-0 hover:bg-muted"
                    onClick={() => setEditingQuiz(quiz)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    className="h-8 w-8 p-0 hover:bg-muted text-red-600 hover:text-red-700"
                    onClick={() => setDeletingQuiz(quiz)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      {editingQuiz && (
        <EditQuizDialog
          quiz={editingQuiz}
          open={!!editingQuiz}
          onOpenChange={() => setEditingQuiz(null)}
        />
      )}

      {deletingQuiz && (
        <DeleteQuizDialog
          quiz={deletingQuiz}
          open={!!deletingQuiz}
          onOpenChange={() => setDeletingQuiz(null)}
        />
      )}
    </div>
  );
}
