/* eslint-disable */
"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { useDeleteQuizMutation } from "@/redux/features/quizManagementApi";
import { toast } from "sonner";

interface DeleteQuizDialogProps {
  quiz: any;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DeleteQuizDialog({
  quiz,
  open,
  onOpenChange,
}: DeleteQuizDialogProps) {
  const [deleteQuiz, { isLoading }] = useDeleteQuizMutation();

  const handleDelete = async () => {
    try {
      const response = await deleteQuiz({ id: quiz?.id }).unwrap();
      if (response) {
        toast.success("Quiz deleted successfully!");
        onOpenChange(false);
      }
    } catch (error: any) {
      if (error.data?.message) {
        toast.error(error.data.message);
      } else {
        toast.error("An error occurred while deleting the quiz.");
      }
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete the quiz &quot;{quiz.title}&quot; and
            all associated questions and results. This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            disabled={isLoading}
            className="bg-red-500 hover:bg-red-600"
          >
            {isLoading ? "Deleting..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
