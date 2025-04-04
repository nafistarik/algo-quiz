"use client";

import { CreateQuizForm } from "@/components/admin/CreateQuizForm";

export default function CreateQuizPage() {
  return (
    <div className=" min-h-screen bg-background">
      <main className="">
        <h1 className="text-3xl font-bold mb-8">Create New Quiz</h1>
        <CreateQuizForm />
      </main>
    </div>
  );
}
