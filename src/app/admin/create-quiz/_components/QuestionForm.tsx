/* eslint-disable */
"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface QuestionFormProps {
  onAddQuestion: (question: any) => void
  editingQuestion?: any
}

export function QuestionForm({ onAddQuestion, editingQuestion }: QuestionFormProps) {
  const [questionText, setQuestionText] = useState(editingQuestion?.text || "")
  const [options, setOptions] = useState(
    editingQuestion?.options || [
      { id: "1", text: "" },
      { id: "2", text: "" },
      { id: "3", text: "" },
      { id: "4", text: "" },
    ],
  )
  const [correctAnswerId, setCorrectAnswerId] = useState(editingQuestion?.correctAnswerId || "1")

  const handleOptionChange = (index: number, text: string) => {
    setOptions((prev: any ) => prev.map((opt: any , i: any ) => (i === index ? { ...opt, text } : opt)))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const question = {
      id: editingQuestion?.id || `question-${Date.now()}`,
      text: questionText,
      options,
      correctAnswerId,
    }
    onAddQuestion(question)
    resetForm()
  }

  const resetForm = () => {
    setQuestionText("")
    setOptions([
      { id: "1", text: "" },
      { id: "2", text: "" },
      { id: "3", text: "" },
      { id: "4", text: "" },
    ])
    setCorrectAnswerId("1")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="questionText">Question</Label>
        <Textarea
          id="questionText"
          placeholder="Enter your question"
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
          required
          rows={2}
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label>Answer Options</Label>
        </div>

        <RadioGroup value={correctAnswerId} onValueChange={setCorrectAnswerId} className="space-y-3">
          {options.map((option: any , index: any ) => (
            <div key={index} className="flex items-center space-x-2">
              <RadioGroupItem value={option.id} id={`option-${index}`} />
              <div className="flex-1">
                <Input
                  placeholder={`Option ${index + 1}`}
                  value={option.text}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                  required
                />
              </div>
            </div>
          ))}
        </RadioGroup>
      </div>

      <Button type="submit">{editingQuestion ? "Update Question" : "Add Question"}</Button>
    </form>
  )
}

