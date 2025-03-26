/* eslint-disabled */

import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { Quiz } from "@/lib/types";

export default function QuizCard({ quiz }: { quiz: Quiz }) {
  return (
    <div>
      <Card key={quiz.id} className="overflow-hidden h-full flex flex-col">
        {quiz.thumbnail ? (
          <div className="aspect-[5/3]">
            <Image
              src={quiz.thumbnail}
              alt="Quiz Thumbnail"
              height={1000}
              width={1000}
              className="h-full w-full object-cover hover:scale-105 transition-all duration-500 ease-in-out"
            />
          </div>
        ) : (
          <div className=" aspect-[5/3] w-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
            <h3 className="text-xl font-bold text-white">{quiz.title}</h3>
          </div>
        )}
        <div className="flex-1 flex flex-col justify-between">
          <CardContent className="p-4">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {quiz.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {quiz.description.length > 120
                  ? `${quiz.description.substring(0, 120)}...`
                  : quiz.description}
              </p>
            </div>
          </CardContent>

          <div>
            <div className="flex items-center justify-between text-sm px-4 pb-2">
              <span>{quiz.questionCount} questions</span>
              <span>{quiz.questionCount} mins</span>
            </div>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full" asChild>
                <Link href={`/quiz/${quiz.id}`}>{quiz?.totalAttempts > 0 ? "View Result" : "Start Quiz"}</Link>
              </Button>
            </CardFooter>
          </div>
        </div>
      </Card>
    </div>
  );
}
