/* eslint-disable */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { Quiz, QuizResult, User, QuizStats } from "@/lib/types"

// This would be replaced with your actual API base URL
const baseUrl = "/api"

export const quizApi = createApi({
  reducerPath: "quizApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Quiz", "Result", "Leaderboard"],
  endpoints: (builder) => ({
    getPopularQuizzes: builder.query<Quiz[], void>({
      query: () => "/quizzes/popular",
      // Mock data for development
      transformResponse: () => [
        {
          id: "1",
          title: "Technology",
          description:
            "Explore the world of technology with this interesting Technology Quiz. Challenge if you dare to put your knowledge to the test!",
          status: "published",
          timeLimit: 10,
          questionCount: 10,
          questions: [],
          createdAt: new Date().toISOString(),
          color: "#f97316",
        },
        {
          id: "2",
          title: "Science",
          description: "Test your knowledge of scientific principles and discoveries",
          status: "published",
          timeLimit: 15,
          questionCount: 15,
          questions: [],
          createdAt: new Date().toISOString(),
          color: "#10b981",
        },
        {
          id: "3",
          title: "History",
          description: "Journey through time with questions about major historical events",
          status: "published",
          timeLimit: 12,
          questionCount: 12,
          questions: [],
          createdAt: new Date().toISOString(),
          color: "#6366f1",
        },
        {
          id: "4",
          title: "Geography",
          description: "Explore countries, capitals, and natural wonders",
          status: "published",
          timeLimit: 8,
          questionCount: 8,
          questions: [],
          createdAt: new Date().toISOString(),
          color: "#ec4899",
        },
      ],
    }),
    getRecentlyPlayed: builder.query<
      {
        id: string
        title: string
        score: number
        totalQuestions: number
        date: string
        color?: string
        icon?: string
      }[],
      void
    >({
      query: () => "/quizzes/recent",
      // Mock data for development
      transformResponse: () => [
        {
          id: "1",
          title: "Social Sciences",
          score: 8,
          totalQuestions: 10,
          date: new Date().toISOString(),
          color: "#f97316",
          icon: "🧠",
        },
        {
          id: "2",
          title: "Mathematics",
          score: 7,
          totalQuestions: 10,
          date: new Date(Date.now() - 86400000).toISOString(),
          color: "#10b981",
          icon: "🔢",
        },
        {
          id: "3",
          title: "Literature",
          score: 9,
          totalQuestions: 10,
          date: new Date(Date.now() - 172800000).toISOString(),
          color: "#6366f1",
          icon: "📚",
        },
      ],
    }),
    // getQuizById: builder.query<Quiz, string>({
    //   query: (id) => `/quizzes/${id}`,
    //   // Mock data for development
    //   transformResponse: (_, __, arg) => ({
    //     id: arg,
    //     title: "Technology Quiz",
    //     description: "Test your knowledge of technology",
    //     status: "published",
    //     timeLimit: 10,
    //     createdAt: new Date().toISOString(),
    //     questions: [
    //       {
    //         id: "q1",
    //         text: "What does CPU stand for?",
    //         options: [
    //           { id: "a", text: "Central Processing Unit" },
    //           { id: "b", text: "Computer Personal Unit" },
    //           { id: "c", text: "Central Processor Unifier" },
    //           { id: "d", text: "Central Process Utility" },
    //         ],
    //         correctAnswerId: "a",
    //       },
    //       {
    //         id: "q2",
    //         text: "Which company created the iPhone?",
    //         options: [
    //           { id: "a", text: "Google" },
    //           { id: "b", text: "Microsoft" },
    //           { id: "c", text: "Apple" },
    //           { id: "d", text: "Samsung" },
    //         ],
    //         correctAnswerId: "c",
    //       },
    //       {
    //         id: "q3",
    //         text: "What year was the first website created?",
    //         options: [
    //           { id: "a", text: "1985" },
    //           { id: "b", text: "1991" },
    //           { id: "c", text: "1995" },
    //           { id: "d", text: "2000" },
    //         ],
    //         correctAnswerId: "b",
    //         explanation: "The first website was created in 1991 by Tim Berners-Lee.",
    //       },
    //     ],
    //   }),
    // }),
    submitQuiz: builder.mutation<{ resultId: string }, { quizId: string; answers: Record<string, string> }>({
      query: (data) => ({
        url: "/quizzes/submit",
        method: "POST",
        body: data,
      }),
      // Mock response
      transformResponse: () => ({
        resultId: "result-123",
      }),
    }),
    getQuizResult: builder.query<QuizResult, string>({
      query: (resultId) => `/results/${resultId}`,
      // Mock data for development
      transformResponse: (_, __, arg) => ({
        id: arg,
        quizId: "quiz-123",
        quizTitle: "Technology Quiz",
        totalQuestions: 10,
        correctAnswers: 7,
        wrongAnswers: 3,
        timeTaken: "8:45",
        questions: [
          {
            id: "q1",
            text: "What does CPU stand for?",
            options: [
              { id: "a", text: "Central Processing Unit" },
              { id: "b", text: "Computer Personal Unit" },
              { id: "c", text: "Central Processor Unifier" },
              { id: "d", text: "Central Process Utility" },
            ],
            correctAnswerId: "a",
            userAnswerId: "a",
            isCorrect: true,
          },
          {
            id: "q2",
            text: "Which company created the iPhone?",
            options: [
              { id: "a", text: "Google" },
              { id: "b", text: "Microsoft" },
              { id: "c", text: "Apple" },
              { id: "d", text: "Samsung" },
            ],
            correctAnswerId: "c",
            userAnswerId: "c",
            isCorrect: true,
          },
          {
            id: "q3",
            text: "What year was the first website created?",
            options: [
              { id: "a", text: "1985" },
              { id: "b", text: "1991" },
              { id: "c", text: "1995" },
              { id: "d", text: "2000" },
            ],
            correctAnswerId: "b",
            userAnswerId: "a",
            isCorrect: false,
            explanation: "The first website was created in 1991 by Tim Berners-Lee.",
          },
        ],
      }),
    }),
    // getLeaderboard: builder.query<
    //   {
    //     topUsers: User[]
    //     currentUser: User
    //     quizStats: QuizStats
    //   },
    //   string
    // >({
    //   query: (quizId) => `/leaderboard/${quizId}`,
    //   // Mock data for development
    //   transformResponse: () => ({
    //     topUsers: [
    //       {
    //         id: "1",
    //         name: "Sophia Cao",
    //         rank: 1,
    //         score: 980,
    //         correctAnswers: 98,
    //         wrongAnswers: 2,
    //         avatar: "/placeholder.svg?height=100&width=100",
    //         color: "#f97316",
    //       },
    //       {
    //         id: "2",
    //         name: "Emma Ema",
    //         rank: 2,
    //         score: 950,
    //         correctAnswers: 95,
    //         wrongAnswers: 5,
    //         avatar: "/placeholder.svg?height=100&width=100",
    //         color: "#10b981",
    //       },
    //       {
    //         id: "3",
    //         name: "Andrew W",
    //         rank: 3,
    //         score: 920,
    //         correctAnswers: 92,
    //         wrongAnswers: 8,
    //         avatar: "/placeholder.svg?height=100&width=100",
    //         color: "#6366f1",
    //       },
    //       {
    //         id: "4",
    //         name: "Raya Gil Endawa",
    //         rank: 4,
    //         score: 890,
    //         correctAnswers: 89,
    //         wrongAnswers: 11,
    //         avatar: "/placeholder.svg?height=100&width=100",
    //         color: "#ec4899",
    //       },
    //       {
    //         id: "5",
    //         name: "Olivia Ava",
    //         rank: 5,
    //         score: 870,
    //         correctAnswers: 87,
    //         wrongAnswers: 13,
    //         avatar: "/placeholder.svg?height=100&width=100",
    //         color: "#8b5cf6",
    //       },
    //       {
    //         id: "6",
    //         name: "David Joshua",
    //         rank: 6,
    //         score: 850,
    //         correctAnswers: 85,
    //         wrongAnswers: 15,
    //         avatar: "/placeholder.svg?height=100&width=100",
    //         color: "#14b8a6",
    //       },
    //       {
    //         id: "7",
    //         name: "Charlotte Harper",
    //         rank: 7,
    //         score: 830,
    //         correctAnswers: 83,
    //         wrongAnswers: 17,
    //         avatar: "/placeholder.svg?height=100&width=100",
    //         color: "#f59e0b",
    //       },
    //       {
    //         id: "8",
    //         name: "Mia Evelyn",
    //         rank: 8,
    //         score: 810,
    //         correctAnswers: 81,
    //         wrongAnswers: 19,
    //         avatar: "/placeholder.svg?height=100&width=100",
    //         color: "#8b5cf6",
    //       },
    //     ],
    //     currentUser: {
    //       id: "current",
    //       name: "Current User",
    //       rank: 12,
    //       score: 750,
    //       correctAnswers: 75,
    //       wrongAnswers: 25,
    //       avatar: "/placeholder.svg?height=100&width=100",
    //       color: "#f97316",
    //     },
    //     quizStats: {
    //       averageScore: 78,
    //       highestScore: 98,
    //       lowestScore: 45,
    //       totalParticipants: 124,
    //     },
    //   }),
    // }),
  }),
})

export const {
  useGetPopularQuizzesQuery,
  useGetRecentlyPlayedQuery,
  // useGetQuizByIdQuery,
  useSubmitQuizMutation,
  useGetQuizResultQuery,
//   useGetLeaderboardQuery,
} = quizApi

