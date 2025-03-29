/* eslint-disable */

import { Card } from "@/components/ui/card";
import { allAchievements, dummyQuizResults } from "@/lib/data";
import { useEffect, useState } from "react";
import { Check, Lock } from "lucide-react";

export function UserAchievements() {
  const [achievements, setUserAchievements] = useState(allAchievements);

  useEffect(() => {
    const updatedAchievements = calculateAchievements(dummyQuizResults);
    setUserAchievements(updatedAchievements);
  }, []);

  const calculateAchievements = (results: any) => {
    const achievements = [...allAchievements];
    achievements[0].unlocked = results.length > 0;
    achievements[1].unlocked = results.some(
      (result: any) => parseFloat(result.percentage) === 100
    );
    achievements[2].unlocked =
      results.length > 0 &&
      results.every((result: any) => parseFloat(result.percentage) > 70);
    achievements[3].unlocked = results.length > 3;

    return achievements;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {achievements.map((achievement) => (
        <Card
          key={achievement.id}
          className={`overflow-hidden transition-all ${
            achievement.unlocked ? "opacity-100" : "opacity-50"
          }`}
        >
          <div className="flex items-center p-4 gap-4">
            <div
              className={`h-12 w-12 rounded-full flex items-center justify-center text-2xl ${
                achievement.unlocked
                  ? "bg-primary text-primary "
                  : "bg-primary text-muted-foreground"
              }`}
            >
              {achievement.icon || "🏆"}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium ">{achievement.title}</h3>
              <p className="text-sm text-muted-foreground ">
                {achievement.description}
              </p>
            </div>
            <div
              className={`h-6 w-6 rounded-full flex items-center justify-center ${
                achievement.unlocked
                  ? "bg-gradient-to-r from-primary to-secondary text-foreground font-extrabold"
                  : "bg-primary text-foreground"
              }`}
            >
              {achievement.unlocked ? (
                <Check className="h-4 w-4 " />
              ) : (
                <Lock className="h-4 w-4" />
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
