/* eslint-disable */

"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Plus, Trash2 } from "lucide-react"

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
  const [explanation, setExplanation] = useState(editingQuestion?.explanation || "")

  const handleOptionChange = (index: number, text: string) => {
    setOptions((prev: any ) => prev.map((opt: any , i: any ) => (i === index ? { ...opt, text } : opt)))
  }

  const handleAddOption = () => {
    setOptions((prev: any ) => [...prev, { id: `${prev.length + 1}`, text: "" }])
  }

  const handleRemoveOption = (index: number) => {
    if (options.length <= 2) return
    const newOptions = options.filter((_: any , i: any ) => i !== index)
    setOptions(newOptions)
    if (correctAnswerId === options[index].id) {
      setCorrectAnswerId(newOptions[0].id)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const question = {
      id: editingQuestion?.id || `question-${Date.now()}`,
      text: questionText,
      options,
      correctAnswerId,
      explanation,
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
    setExplanation("")
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
          <Button type="button" variant="outline" size="sm" onClick={handleAddOption}>
            <Plus className="h-4 w-4 mr-1" />
            Add Option
          </Button>
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
              {options.length > 2 && (
                <Button type="button" variant="ghost" size="sm" onClick={() => handleRemoveOption(index)}>
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
              )}
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label htmlFor="explanation">Explanation (Optional)</Label>
        <Textarea
          id="explanation"
          placeholder="Explain why the correct answer is right"
          value={explanation}
          onChange={(e) => setExplanation(e.target.value)}
          rows={2}
        />
      </div>

      <Button type="submit">{editingQuestion ? "Update Question" : "Add Question"}</Button>
    </form>
  )
}

