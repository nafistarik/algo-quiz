"use client";
import CreateQuizPage from "./_components/CreateQuizPage";

export default function QuizPage() {
  return (
    <div className=" min-h-screen bg-background">
      <main className="">
        <h1 className="text-3xl font-bold mb-8">Create New Quiz</h1>
        <CreateQuizPage />
      </main>
    </div>
  );
}
