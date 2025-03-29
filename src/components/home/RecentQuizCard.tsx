import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Quiz } from "@/lib/types";

export default function RecentQuizCard({ quiz }: { quiz: Quiz }) {
  return (
    <Card key={quiz.id} className="overflow-hidden shadow-sm ">
      <CardContent className="sm:p-4 p-4 flex items-center justify-between ">
        <div className="flex items-center gap-4">
          <div className="h-12 !min-w-12 rounded-full flex items-center justify-center text-white overflow-hidden shadow-2xl">
            {quiz.thumbnail ? (
              <Image
                src={quiz.thumbnail}
                alt="Quiz Thumbnail"
                height={1000}
                width={1000}
                className="h-12 w-12 object-cover scale-150 transition-all duration-500 ease-in-out"
              />
            ) : (
              <div className="h-full w-full bg-gradient-to-r from-primary to-secondary"></div>
            )}
          </div>
          <div>
            <h3 className="font-medium">{quiz.title}</h3>
            <p className="text-sm text-muted-foreground">
              <span className="hidden sm:inline">Total</span> Questions:{" "}
              {quiz.questionCount}
            </p>
          </div>
        </div>
        <Button variant="outline" size="sm" asChild className="sm:px-4 px-2">
          <Link href={`/result/${quiz.id}`}>
            <span className="hidden sm:block">View Result</span>
            <ExternalLink className=" h-4 w-4 " />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
