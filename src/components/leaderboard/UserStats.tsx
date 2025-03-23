/* eslint-disable */

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface UserStatsProps {
  currentUser?: any
  quizStats?: any
}

export function UserStats({ currentUser, quizStats }: UserStatsProps) {
  if (!currentUser || !quizStats) {
    return null
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Stats</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col items-center">
          <Avatar className="h-20 w-20 mb-4">
            <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
            <AvatarFallback className="text-xl" style={{ backgroundColor: currentUser.color }}>
              {currentUser.name
                .split(" ")
                .map((n: string) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <h3 className="text-xl font-bold">{currentUser.name}</h3>
          <p className="text-muted-foreground">Rank #{currentUser.rank}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-muted/50 p-4 rounded-lg text-center">
            <p className="text-sm text-muted-foreground">Correct Answers</p>
            <p className="text-2xl font-bold text-green-500">{currentUser.correctAnswers}</p>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg text-center">
            <p className="text-sm text-muted-foreground">Wrong Answers</p>
            <p className="text-2xl font-bold text-red-500">{currentUser.wrongAnswers}</p>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-medium">Quiz Statistics</h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Average Score</span>
              <span className="font-medium">{quizStats.averageScore}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Highest Score</span>
              <span className="font-medium text-green-500">{quizStats.highestScore}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Lowest Score</span>
              <span className="font-medium text-red-500">{quizStats.lowestScore}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total Participants</span>
              <span className="font-medium">{quizStats.totalParticipants}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

