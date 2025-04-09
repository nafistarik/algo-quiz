"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CreateQuizFormProps {
  onSubmit: (data: { title: string; description: string }) => void;
  isSubmitting: boolean;
}

export function CreateQuizForm({
  onSubmit,
  isSubmitting,
}: CreateQuizFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, description });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quiz Details</CardTitle>
        <CardDescription>
          Enter the basic information about your quiz
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
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
          <CardFooter className="p-0 pt-4">
            <Button type="submit" disabled={isSubmitting || !title}>
              {isSubmitting ? "Creating Quiz..." : "Create Quiz"}
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
