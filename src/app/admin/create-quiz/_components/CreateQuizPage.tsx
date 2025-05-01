/* eslint-disable */
"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreateQuizForm } from "./CreateQuizForm";
import { QuestionForm } from "./QuestionForm";
import { QuestionList } from "./QuestionList";
import { QuizDetails } from "@/lib/types";
import { useCreateQuizMutation } from "@/redux/features/quizManagementApi";
import { toast } from "sonner";
import {
  useCreateQuestionMutation,
  useDeleteQuestionMutation,
  useUpdateQuestionMutation,
} from "@/redux/features/questionApi";

interface QuestionData {
  questionId: string;
  question: string;
  options: string[];
  correctAnswer: string;
}

export default function CreateQuizPage() {
  const [step, setStep] = useState<"details" | "questions">("details");
  const [quizId, setQuizId] = useState<string | null>(null);
  const [questions, setQuestions] = useState<QuestionData[]>([]);

  const [formData, setFormData] = useState({
    question: "",
    options: ["", "", "", ""],
    correctAnswer: "",
  });

  const [editingQuestion, setEditingQuestion] = useState<QuestionData | null>(
    null
  );

  const [createQuiz, { isLoading }] = useCreateQuizMutation();
  const [createQuestion, { isLoading: questionCreateLoading }] =
    useCreateQuestionMutation();
  const [updateQuestion, { isLoading: questionUpdateLoading }] =
    useUpdateQuestionMutation();
  const [deleteQuestion, { isLoading: questionDeleteLoading }] =
    useDeleteQuestionMutation();

  const resetForm = () => {
    setFormData({
      question: "",
      options: ["", "", "", ""],
      correctAnswer: "",
    });
    setEditingQuestion(null);
  };

  const handleCreateQuiz = async (data: QuizDetails) => {
    try {
      const response = await createQuiz(data);
      toast.success("Quiz created successfully");
      setQuizId(response.data.data.id);
      setStep("questions");
    } catch (error: any) {
      if (error?.status === 401) {
        toast.error("Session expired. Please login again.");
      } else {
        toast.error(
          error?.data?.message ||
            error?.error ||
            "Failed to create quiz. Please try again."
        );
      }
    }
  };

  const handleQuestionSubmit = async () => {
    if (editingQuestion) {
      try {
        await updateQuestion({
          id: editingQuestion.questionId,
          data: formData,
        });
        setQuestions((prev) =>
          prev.map((q) =>
            q.questionId === editingQuestion.questionId
              ? {
                  ...q,
                  ...formData,
                  questionId: editingQuestion.questionId,
                }
              : q
          )
        );
        toast.success("Question updated successfully");
      } catch (error: any) {
        if (error?.status === 401) {
          toast.error("Session expired. Please login again.");
        } else {
          toast.error(error?.data?.message || "Failed to update question.");
        }
      } finally {
        resetForm();
      }
    } else {
      try {
        const response = await createQuestion({
          id: quizId,
          data: formData,
        });

        setQuestions((prev) => [
          ...prev,
          {
            ...formData,
            questionId: response.data.data.id,
          },
        ]);
        toast.success("Question added successfully");

        resetForm();
      } catch (error: any) {
        if (error?.status === 401) {
          toast.error("Session expired. Please login again.");
        } else if (error.message === "No quiz selected") {
          toast.error(error.message);
        } else {
          toast.error(
            error?.data?.message ||
              "Failed to create question. Please check your inputs."
          );
        }
      } finally {
        resetForm();
      }
    }
  };

  const handleEditQuestion = (id: string) => {
    const questionToEdit = questions.find((q) => q.questionId === id);
    if (questionToEdit) {
      setFormData({
        question: questionToEdit.question,
        options: [...questionToEdit.options],
        correctAnswer: questionToEdit.correctAnswer,
      });
      setEditingQuestion(questionToEdit);
    }
  };

  const handleDeleteQuestion = async (id: string) => {
    try {
      await deleteQuestion({ id });
      setQuestions((prev) => prev.filter((q) => q.questionId !== id));
      toast.success("Question deleted successfully");
    } catch (error: any) {
      if (error?.status === 401) {
        toast.error("Session expired. Please login again.");
      } else if (error?.status === 404) {
        toast.error("Question already deleted");
      } else {
        toast.error(
          error?.data?.message || 
          "Failed to delete question. Please try again."
        );
      }
    }
  };

  const updateFormField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const updateOption = (index: number, value: string) => {
    const newOptions = [...formData.options];
    newOptions[index] = value;
    setFormData((prev) => ({
      ...prev,
      options: newOptions,
      correctAnswer:
        prev.correctAnswer === prev.options[index] ? value : prev.correctAnswer,
    }));
  };

  return (
    <div className="max-w-3xl p-4">
      <Tabs
        value={step}
        onValueChange={(val) => val === "details" && setStep("details")}
      >
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="details" disabled={true}>
            Quiz Details
          </TabsTrigger>
          <TabsTrigger value="questions" disabled={true}>
            Add Questions
          </TabsTrigger>
        </TabsList>

        <TabsContent value="details">
          <CreateQuizForm
            onSubmit={handleCreateQuiz}
            isSubmitting={isLoading}
          />
        </TabsContent>

        <TabsContent value="questions">
          <div className="space-y-6">
            <QuestionForm
              formData={formData}
              isEditing={questionUpdateLoading}
              isSubmitting={questionCreateLoading}
              onQuestionChange={(value) => updateFormField("question", value)}
              onOptionChange={updateOption}
              onCorrectAnswerChange={(value) =>
                updateFormField("correctAnswer", value)
              }
              onSubmit={handleQuestionSubmit}
              onCancel={resetForm}
              editMode={!!editingQuestion}
            />

            <QuestionList
              questions={questions}
              onEdit={handleEditQuestion}
              onDelete={handleDeleteQuestion}
              isDeleting={questionDeleteLoading}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
