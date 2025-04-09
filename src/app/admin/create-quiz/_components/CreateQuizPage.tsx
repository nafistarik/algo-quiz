"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreateQuizForm } from "./CreateQuizForm";
import { QuestionForm } from "./QuestionForm";
import { QuestionList } from "./QuestionList";
import { QuizDetails } from "@/lib/types";

interface QuestionData {
  questionId: string;
  question: string;
  options: string[];
  correctAnswer: string;
}

export default function CreateQuizPage() {
  const [step, setStep] = useState<"details" | "questions">("details");
  const [quizId, setQuizId] = useState<string | null>(null);
  const [isCreatingQuiz, setIsCreatingQuiz] = useState(false);
  const [isSubmittingQuestion, setIsSubmittingQuestion] = useState(false);
  const [questions, setQuestions] = useState<QuestionData[]>([]);

  // Form state managed by parent
  const [formData, setFormData] = useState({
    question: "",
    options: ["", "", "", ""],
    correctAnswer: "",
  });
  const [editingQuestionId, setEditingQuestionId] = useState<string | null>(
    null
  );

  const handleCreateQuiz = async (data: QuizDetails) => {
    setIsCreatingQuiz(true);
    console.log("POST /quizzes", data);

    setTimeout(() => {
      const mockQuizId = `QUIZ_${Math.random().toString(36).substring(2, 9)}`;
      console.log("Received quiz ID:", mockQuizId);
      setQuizId(mockQuizId);
      setIsCreatingQuiz(false);
      setStep("questions");
    }, 1000);
  };

  const handleQuestionSubmit = async () => {
    setIsSubmittingQuestion(true);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (editingQuestionId) {
      // Update existing question
      console.log(
        `PUT /quizzes/${quizId}/questions/${editingQuestionId}`,
        formData
      );

      setQuestions((prev) =>
        prev.map((q) =>
          q.questionId === editingQuestionId
            ? {
                ...q,
                ...formData,
                questionId: editingQuestionId,
              }
            : q
        )
      );
    } else {
      // Add new question
      console.log(`POST /quizzes/${quizId}/questions`, formData);

      const questionId = `Q_${Math.random().toString(36).substring(2, 9)}`;
      setQuestions((prev) => [
        ...prev,
        {
          ...formData,
          questionId,
        },
      ]);
    }

    // Reset form and editing state
    resetForm();
    setIsSubmittingQuestion(false);
  };

  const handleEditQuestion = (id: string) => {
    const questionToEdit = questions.find((q) => q.questionId === id);
    if (questionToEdit) {
      setFormData({
        question: questionToEdit.question,
        options: [...questionToEdit.options],
        correctAnswer: questionToEdit.correctAnswer,
      });
      setEditingQuestionId(id);
    }
  };

  const handleDeleteQuestion = (id: string) => {
    console.log(`DELETE /quizzes/${quizId}/questions/${id}`);
    setQuestions((prev) => prev.filter((q) => q.questionId !== id));
  };

  const resetForm = () => {
    setFormData({
      question: "",
      options: ["", "", "", ""],
      correctAnswer: "",
    });
    setEditingQuestionId(null);
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
      // Update correctAnswer if the edited option was the correct one
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
            isSubmitting={isCreatingQuiz}
          />
        </TabsContent>

        <TabsContent value="questions">
          <div className="space-y-6">
            <QuestionForm
              formData={formData}
              isEditing={!!editingQuestionId}
              isSubmitting={isSubmittingQuestion}
              onQuestionChange={(value) => updateFormField("question", value)}
              onOptionChange={updateOption}
              onCorrectAnswerChange={(value) =>
                updateFormField("correctAnswer", value)
              }
              onSubmit={handleQuestionSubmit}
              onCancel={resetForm}
            />

            <QuestionList
              questions={questions}
              onEdit={handleEditQuestion}
              onDelete={handleDeleteQuestion}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
