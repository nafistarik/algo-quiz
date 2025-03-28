/* eslint-disable */

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserStatsProps {
  leaderBoardData?: any;
  myPerformance?: any;
}

export function UserStats({
  leaderBoardData,
  myPerformance,
}: UserStatsProps) {
  if (!leaderBoardData || !myPerformance) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Stats</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col items-center">
          <Avatar className="h-20 w-20 mb-4">
            <AvatarImage src={myPerformance.avatar} alt={myPerformance.name} />
            <AvatarFallback className="text-xl bg-gradient-to-br from-primary to-secondary text-white">
              {myPerformance.name
                .split(" ")
                .map((n: string) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <h3 className="text-xl font-bold">{myPerformance.name}</h3>
          <p className="text-muted-foreground">Rank #{myPerformance.rank}</p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-muted p-4 rounded-lg text-center">
            <p className="text-sm text-muted-foreground">Correct</p>
            <p className="text-2xl font-bold text-green-500">
              {myPerformance.correctAnswers}
            </p>
          </div>
          <div className="bg-muted p-4 rounded-lg text-center">
            <p className="text-sm text-muted-foreground">Wrong</p>
            <p className="text-2xl font-bold text-red-500">
              {myPerformance.wrongAnswers}
            </p>
          </div>
          <div className="bg-muted p-4 rounded-lg text-center">
            <p className="text-sm text-muted-foreground">Points</p>
            <p className="text-2xl font-bold text-red-500">
              {myPerformance.obtainedMarks}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-medium">Quiz Statistics</h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total Questions</span>
              <span className="font-medium">
                {leaderBoardData?.quiz.total_questions}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total Marks</span>
              <span className="font-medium">
                {leaderBoardData?.quiz.total_marks}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Average Score</span>
              <span className="font-medium">
                {leaderBoardData?.stats.average_score}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Highest Score</span>
              <span className="font-medium text-green-500">
                {leaderBoardData?.stats.highest_score}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Lowest Score</span>
              <span className="font-medium text-red-500">
                {leaderBoardData?.stats.lowest_score}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total Participants</span>
              <span className="font-medium">
                {leaderBoardData?.stats.total_attempts}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
