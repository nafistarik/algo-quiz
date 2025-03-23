import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { QuizHistory, Achievement } from "@/lib/types"

// This would be replaced with your actual API base URL
const baseUrl = "/api/user"

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getUserProfile: builder.query<
      {
        id: string
        name: string
        email: string
        avatar?: string
        quizHistory: QuizHistory[]
        achievements: Achievement[]
      },
      void
    >({
      query: () => "/profile",
      // Mock data for development
      transformResponse: () => ({
        id: "user-123",
        name: "John Doe",
        email: "john.doe@example.com",
        avatar: "/placeholder.svg?height=100&width=100",
        quizHistory: [
          {
            id: "1",
            title: "Technology Quiz",
            date: new Date().toISOString(),
            score: 8,
            totalQuestions: 10,
            resultId: "result-1",
          },
          {
            id: "2",
            title: "Science Quiz",
            date: new Date(Date.now() - 86400000).toISOString(),
            score: 7,
            totalQuestions: 10,
            resultId: "result-2",
          },
          {
            id: "3",
            title: "History Quiz",
            date: new Date(Date.now() - 172800000).toISOString(),
            score: 9,
            totalQuestions: 12,
            resultId: "result-3",
          },
        ],
        achievements: [
          {
            id: "1",
            title: "Quiz Master",
            description: "Complete 10 quizzes with a score of 80% or higher",
            earnedDate: new Date(Date.now() - 86400000).toISOString(),
            icon: "🏆",
            color: "#f97316",
          },
          {
            id: "2",
            title: "Perfect Score",
            description: "Get a perfect score on any quiz",
            earnedDate: new Date(Date.now() - 172800000).toISOString(),
            icon: "🌟",
            color: "#10b981",
          },
          {
            id: "3",
            title: "Speed Demon",
            description: "Complete a quiz in less than half the allotted time",
            earnedDate: new Date(Date.now() - 259200000).toISOString(),
            icon: "⚡",
            color: "#6366f1",
          },
        ],
      }),
    }),
  }),
})

export const { useGetUserProfileQuery } = userApi

