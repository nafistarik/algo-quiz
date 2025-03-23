/* eslint-disable */

"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, Line, LineChart, XAxis, YAxis } from "recharts"

interface QuizAnalyticsProps {
  data?: any
}

export function QuizAnalytics({ data }: QuizAnalyticsProps) {
  if (!data) return null

  return (
    <Tabs defaultValue="overview" className="space-y-6">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
        <TabsTrigger value="users">Users</TabsTrigger>
      </TabsList>

      <TabsContent value="overview" className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Quizzes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{data.totalQuizzes}</div>
              <p className="text-xs text-muted-foreground">+{data.newQuizzes} new this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Attempts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{data.totalAttempts}</div>
              <p className="text-xs text-muted-foreground">+{data.newAttempts} new this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Average Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{data.averageScore}%</div>
              <p className="text-xs text-muted-foreground">
                {data.scoreChange > 0 ? `+${data.scoreChange}%` : `${data.scoreChange}%`} from last month
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Attempts Over Time</CardTitle>
            <CardDescription>Number of quiz attempts in the last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ChartContainer
                config={{
                  attempts: {
                    label: "Attempts",
                    color: "hsl(var(--chart-1))",
                  },
                }}
              >
                <LineChart
                  data={data.attemptsOverTime}
                  margin={{
                    top: 5,
                    right: 10,
                    left: 10,
                    bottom: 0,
                  }}
                >
                  <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={10} />
                  <YAxis tickLine={false} axisLine={false} tickMargin={10} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="attempts" strokeWidth={2} activeDot={{ r: 6 }} />
                </LineChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="quizzes" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Quiz Performance</CardTitle>
            <CardDescription>Average scores across different quizzes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ChartContainer
                config={{
                  score: {
                    label: "Average Score",
                    color: "hsl(var(--chart-1))",
                  },
                }}
              >
                <BarChart
                  data={data.quizPerformance}
                  layout="vertical"
                  margin={{
                    top: 5,
                    right: 10,
                    left: 100,
                    bottom: 0,
                  }}
                >
                  <XAxis type="number" tickLine={false} axisLine={false} />
                  <YAxis type="category" dataKey="title" tickLine={false} axisLine={false} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="score" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Most Popular Quizzes</CardTitle>
            <CardDescription>Quizzes with the most attempts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ChartContainer
                config={{
                  attempts: {
                    label: "Attempts",
                    color: "hsl(var(--chart-2))",
                  },
                }}
              >
                <BarChart
                  data={data.popularQuizzes}
                  margin={{
                    top: 5,
                    right: 10,
                    left: 10,
                    bottom: 20,
                  }}
                >
                  <XAxis dataKey="title" tickLine={false} axisLine={false} tickMargin={10} />
                  <YAxis tickLine={false} axisLine={false} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="attempts" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="users" className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Performers</CardTitle>
            <CardDescription>Users with the highest average scores</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ChartContainer
                config={{
                  score: {
                    label: "Average Score",
                    color: "hsl(var(--chart-3))",
                  },
                }}
              >
                <BarChart
                  data={data.topPerformers}
                  margin={{
                    top: 5,
                    right: 10,
                    left: 10,
                    bottom: 20,
                  }}
                >
                  <XAxis dataKey="name" tickLine={false} axisLine={false} tickMargin={10} />
                  <YAxis tickLine={false} axisLine={false} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="score" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>User Activity</CardTitle>
            <CardDescription>Number of active users over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ChartContainer
                config={{
                  users: {
                    label: "Active Users",
                    color: "hsl(var(--chart-4))",
                  },
                }}
              >
                <LineChart
                  data={data.userActivity}
                  margin={{
                    top: 5,
                    right: 10,
                    left: 10,
                    bottom: 0,
                  }}
                >
                  <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={10} />
                  <YAxis tickLine={false} axisLine={false} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="users" strokeWidth={2} activeDot={{ r: 6 }} />
                </LineChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

