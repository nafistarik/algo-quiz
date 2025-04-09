/* eslint-disable */

"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { QuestionForm } from "@/app/admin/create-quiz/_components/QuestionForm"
import { useRouter } from "next/navigation"

export function CreateQuizForm() {
  const [step, setStep] = useState("details")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [questions, setQuestions] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleAddQuestion = (question: any) => {
    setQuestions((prev) => [...prev, question])
  }

  const handleRemoveQuestion = (index: number) => {
    setQuestions((prev) => prev.filter((_, i) => i !== index))
  }

  const handleEditQuestion = (index: number, question: any) => {
    setQuestions((prev) => prev.map((q, i) => (i === index ? question : q)))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      router.push("/admin/dashboard")
    }, 1000)
  }

  return (
    <div className="max-w-3xl">
      <Tabs value={step} onValueChange={setStep}>
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="details">Quiz Details</TabsTrigger>
          <TabsTrigger value="questions" disabled={!title}>
            Add Questions
          </TabsTrigger>
        </TabsList>
        <TabsContent value="details">
          <Card>
            <CardHeader>
              <CardTitle>Quiz Details</CardTitle>
              <CardDescription>Enter the basic information about your quiz</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Quiz Title</Label>
                  <Input
                    id="title"
                    placeholder="Enter quiz title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Enter quiz description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                  />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button onClick={() => setStep("questions")} disabled={!title}>
                Next: Add Questions
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="questions">
          <Card>
            <CardHeader>
              <CardTitle>Add Questions</CardTitle>
              <CardDescription>Create questions for your quiz</CardDescription>
            </CardHeader>
            <CardContent>
              <QuestionForm onAddQuestion={handleAddQuestion} />

              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Questions ({questions.length})</h3>
                {questions.length === 0 ? (
                  <div className="text-center py-8 border rounded-lg bg-muted/50">
                    <p className="text-muted-foreground">No questions added yet. Add your first question above.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {questions.map((question, index) => (
                      <Card key={index}>
                        <CardHeader className="py-3">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-base">Question {index + 1}</CardTitle>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm" onClick={() => handleEditQuestion(index, question)}>
                                Edit
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-red-500"
                                onClick={() => handleRemoveQuestion(index)}
                              >
                                Remove
                              </Button>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="py-2">
                          <p>Q: {question.text}</p>
                          <div className="mt-2 space-y-1">
                            {question.options.map((option: any, optIndex: number) => (
                              <div
                                key={optIndex}
                                className={`p-2 rounded-md text-sm ${
                                  option.id === question.correctAnswerId
                                    ? "bg-green-500/20 border-green-500/30 border"
                                    : "bg-muted"
                                }`}
                              >
                                {option.text}
                                {option.id === question.correctAnswerId && (
                                  <span className="ml-2 text-green-500 text-xs">(Correct)</span>
                                )}
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

