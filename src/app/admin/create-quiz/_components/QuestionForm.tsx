import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";

interface QuestionFormProps {
  formData: {
    question: string;
    options: string[];
    correctAnswer: string;
  };
  isEditing: boolean;
  isSubmitting: boolean;
  onQuestionChange: (value: string) => void;
  onOptionChange: (index: number, value: string) => void;
  onCorrectAnswerChange: (value: string) => void;
  onSubmit: () => void;
  onCancel: () => void;
  editMode?: boolean;
}

export function QuestionForm({
  formData,
  isEditing,
  isSubmitting,
  onQuestionChange,
  onOptionChange,
  onCorrectAnswerChange,
  onSubmit,
  onCancel,
  editMode,
}: QuestionFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="question">Question</Label>
        <Input
          id="question"
          placeholder="Enter your question"
          value={formData.question}
          onChange={(e) => onQuestionChange(e.target.value)}
          required
        />
      </div>

      <div className="space-y-4">
        <Label>Answer Options</Label>
        <RadioGroup
          value={formData.correctAnswer}
          onValueChange={onCorrectAnswerChange}
          className="space-y-3"
        >
          {formData.options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2">
              <RadioGroupItem
                value={option}
                id={`option-${index}`}
                disabled={option.trim() === ""}
              />
              <div className="flex-1">
                <Input
                  placeholder={`Option ${index + 1}`}
                  value={option}
                  onChange={(e) => onOptionChange(index, e.target.value)}
                  required
                />
              </div>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="flex gap-2">
        <Button type="submit" disabled={isSubmitting || isEditing}>
          {isSubmitting
            ? "Submitting..."
            : isEditing
            ? "Updating..."
            : editMode
            ? "Update Question"
            : "Add Question"}
        </Button>
        <Link href="/admin">
          <Button>
            {!isSubmitting && !isEditing && !editMode && "Finish Quiz"}
          </Button>
        </Link>
        {editMode && (
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            disabled={isSubmitting || isEditing}
          >
            Cancel
          </Button>
        )}
      </div>
    </form>
  );
}
