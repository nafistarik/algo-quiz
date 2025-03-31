/* eslint-disable */

"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Search, Plus } from "lucide-react"
import Link from "next/link"
import { EditQuizDialog } from "./EditQuizDialog"
import { DeleteQuizDialog } from "./DeleteQuizDialog"
import EmptyStateMessage from "../EmptyStateMessage"

interface QuizListProps {
  quizzes: any[]
}

export function QuizList({ quizzes }: QuizListProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [editingQuiz, setEditingQuiz] = useState<any | null>(null)
  const [deletingQuiz, setDeletingQuiz] = useState<any | null>(null)

  const filteredQuizzes = quizzes.filter((quiz) => {
    const matchesSearch = quiz.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || quiz.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search quizzes..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="published">Published</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button asChild>
          <Link href="/admin/create-quiz">
            <Plus className="mr-2 h-4 w-4" />
            Create Quiz
          </Link>
        </Button>
      </div>

      <div className="border rounded-lg overflow-x-auto">
        <Table className="w-full overflow-x-auto">
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Questions</TableHead>
              <TableHead>Created</TableHead>
              <TableHead className="w-[80px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredQuizzes.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center pt-8">
                  <EmptyStateMessage message="No quizzes found. Create your first quiz!"/>
                  {/* No quizzes found. Create your first quiz! */}
                </TableCell>
              </TableRow>
            ) : (
              filteredQuizzes.map((quiz) => (
                <TableRow key={quiz.id}>
                  <TableCell className="font-medium">{quiz.title}</TableCell>
                  <TableCell>
                    <Badge variant={quiz.status === "published" ? "default" : "outline"}>
                      {quiz.status === "published" ? "Published" : "Draft"}
                    </Badge>
                  </TableCell>
                  <TableCell>{quiz.questions.length}</TableCell>
                  <TableCell>{new Date(quiz.createdAt).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setEditingQuiz(quiz)}>Edit</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setDeletingQuiz(quiz)} className="text-red-500">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {editingQuiz && (
        <EditQuizDialog quiz={editingQuiz} open={!!editingQuiz} onOpenChange={() => setEditingQuiz(null)} />
      )}

      {deletingQuiz && (
        <DeleteQuizDialog quiz={deletingQuiz} open={!!deletingQuiz} onOpenChange={() => setDeletingQuiz(null)} />
      )}
    </div>
  )
}

