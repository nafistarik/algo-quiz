/* eslint-disable */

import { Card } from "@/components/ui/card"

interface UserAchievementsProps {
  achievements: any[]
}

export function UserAchievements({ achievements }: UserAchievementsProps) {
  if (achievements.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">
          You haven&apos;t earned any achievements yet. Keep quizzing to unlock them!
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {achievements.map((achievement) => (
        <Card key={achievement.id} className="overflow-hidden">
          <div className="flex items-center p-4">
            <div
              className="h-12 w-12 rounded-full flex items-center justify-center text-white mr-4"
              style={{ backgroundColor: achievement.color || "#ea4c37" }}
            >
              {achievement.icon || "🏆"}
            </div>
            <div>
              <h3 className="font-medium">{achievement.title}</h3>
              <p className="text-sm text-muted-foreground">{achievement.description}</p>
              <p className="text-xs text-muted-foreground mt-1">
                Earned on {new Date(achievement.earnedDate).toLocaleDateString()}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

