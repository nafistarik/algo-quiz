/* eslint-disable */

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface LeaderboardListProps {
  users: any[];
  myPerformance: any;
}

export function LeaderboardList({
  users,
  myPerformance,
}: LeaderboardListProps) {
  return (
    <Card className="shadow-lg overflow-hidden">
      <CardHeader className="border-b">
        <CardTitle className="flex items-center gap-3 text-2xl">
          <span className="text-yellow-500">🏆</span>
          Top Performers
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y">
          {users?.slice(0, 5).map((user, index) => (
            <div
              key={user.id}
              className={`flex items-center justify-between p-4  transition-colors ${
                user.id === myPerformance.id
                  ? "bg-gradient-to-r from-primary to-secondary"
                  : "hover:bg-muted"
              } `}
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  {index < 3 ? (
                    <div
                      className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full text-white text-2xl font-extrabold ${
                        index === 0
                          ? "bg-gradient-to-br from-yellow-400 to-yellow-600"
                          : index === 1
                          ? "bg-gradient-to-br from-gray-400 to-gray-600"
                          : "bg-gradient-to-br from-amber-600 to-amber-800"
                      }`}
                    >
                      {index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉"}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-muted font-medium">
                      {index + 1}
                    </div>
                  )}
                </div>

                <Avatar
                  className="w-8 h-8 sm:w-10 sm:h-10 border-2"
                  style={{ borderColor: user.color }}
                >
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white">
                    {user.name
                      .split(" ")
                      .slice(0, 2)
                      .map((n: string) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <div>
                  <p
                    className={`font-medium ${
                      user.id === myPerformance.id
                        ? "text-muted"
                        : "text-foreground"
                    }`}
                  >
                    {user.name.length > 18
                      ? user.name.substring(0, 15) + "..."
                      : user.name}
                  </p>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-sm ${
                        user.id === myPerformance.id
                          ? "text-muted"
                          : "text-muted-foreground"
                      }`}
                    >
                      {user.obtainedMarks} points
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground hidden sm:block">
                      {user.correctAnswers} / {user.submittedAnswers}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="h-8 w-px bg-border mx-2"></div>
                <div
                  className="text-sm font-medium text-black px-2 rounded-2xl"
                  style={{ backgroundColor: user.color }}
                >
                  {user.rank === 1
                    ? "1st"
                    : user.rank === 2
                    ? "2nd"
                    : user.rank === 3
                    ? "3rd"
                    : `${user.rank}th`}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
