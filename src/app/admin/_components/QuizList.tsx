/* eslint-disable */

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useGetAllQuizQuery } from "@/redux/features/quizManagementApi";
import Loading from "@/components/Loading";
import ErrorMessage from "@/components/ErrorMessage";
import AllQuizzes from "./AllQuizzes";

export function QuizList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const {
    data: quizList,
    isLoading: quizListLoading,
    error: quizListError,
  } = useGetAllQuizQuery({});

  {quizListLoading && <Loading />}

  if (quizListError) {
    const errorMessage =
      "data" in quizListError
        ? (quizListError.data as { message?: string })?.message ??
          "An error occurred"
        : "An error occurred";
    return <ErrorMessage>{errorMessage}</ErrorMessage>;
  }

  const filteredQuizzes = quizList?.filter((quiz: any) => {
    const matchesSearch = quiz.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || quiz.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <main className="w-full">
      <h1 className="text-3xl font-bold mb-8">Quiz Dashboard</h1>
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
            <Plus className=" h-4 w-4" />
            Create Quiz
          </Link>
        </Button>
      </div>
      <AllQuizzes quizzes={filteredQuizzes} />
    </main>
  );
}
