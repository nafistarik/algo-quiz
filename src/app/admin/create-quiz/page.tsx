"use client";

import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { CreateQuizForm } from "@/components/admin/CreateQuizForm";

export default function CreateQuizPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Create New Quiz</h1>
        <CreateQuizForm />
      </main>
    </div>
  );
}
