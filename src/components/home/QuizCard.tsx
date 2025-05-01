/* eslint-disabled */

import { Card, CardContent, CardFooter } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { Quiz } from "@/lib/types";
import { ChartArea, Target } from "lucide-react";

export default function QuizCard({ quiz }: { quiz: Quiz }) {
  return (
    <div>
      <Card key={quiz.id} className="overflow-hidden h-full flex flex-col">
        {quiz.thumbnail ? (
          <div className="aspect-[6/4] overflow-hidden relative">
            <Image
              src={quiz.thumbnail}
              alt="Quiz Thumbnail"
              height={1000}
              width={1000}
              className="h-full w-full object-cover hover:scale-110 transition-all duration-500 ease-in-out"
            />
          </div>
        ) : (
          <div className=" aspect-[5/3] w-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
            <h3 className="text-xl font-bold text-white">{quiz.title}</h3>
          </div>
        )}
        <div className="flex-1 flex flex-col justify-between">
          <CardContent className="p-0">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {quiz.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {quiz.description.length > 120
                  ? `${quiz.description.substring(0, 90)}...`
                  : quiz.description}
              </p>
            </div>
          </CardContent>

          <div>
            <div className="flex items-center justify-between text-sm px-4 pb-2">
              <span>{quiz.total_questions} questions</span>
              <span>{quiz.total_questions} mins</span>
            </div>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full" asChild>
                <Link
                  href={
                    quiz.is_attempted
                      ? `/result/${quiz.id}`
                      : `/quiz/${quiz.id}`
                  }
                >
                  {quiz.is_attempted ? (
                    <span className=" flex items-center gap-2 "><ChartArea />View Result</span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Target />
                      Start Quiz</span>
                  )}
                </Link>
              </Button>
            </CardFooter>
          </div>
        </div>
      </Card>
    </div>
  );
}
