import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { Question, QuizAnalyticsData } from "@/lib/types"

// This would be replaced with your actual API base URL
const baseUrl = "/api/admin"

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["AdminQuizzes"],
  endpoints: (builder) => ({
    // getAdminQuizzes: builder.query<Quiz[], void>({
    //   query: () => "/quizzes",
    //   providesTags: ["AdminQuizzes"],
    //   // Mock data for development
    //   transformResponse: () => [
    //     {
    //       id: "1",
    //       title: "Technology Quiz",
    //       description: "Test your knowledge of technology",
    //       status: "published",
    //       timeLimit: 10,
    //       questions: [
    //         {
    //           id: "q1",
    //           text: "What does CPU stand for?",
    //           options: [
    //             { id: "a", text: "Central Processing Unit" },
    //             { id: "b", text: "Computer Personal Unit" },
    //             { id: "c", text: "Central Processor Unifier" },
    //             { id: "d", text: "Central Process Utility" },
    //           ],
    //           correctAnswerId: "a",
    //         },
    //         {
    //           id: "q2",
    //           text: "Which company created the iPhone?",
    //           options: [
    //             { id: "a", text: "Google" },
    //             { id: "b", text: "Microsoft" },
    //             { id: "c", text: "Apple" },
    //             { id: "d", text: "Samsung" },
    //           ],
    //           correctAnswerId: "c",
    //         },
    //       ],
    //       createdAt: new Date().toISOString(),
    //     },
    //     {
    //       id: "2",
    //       title: "Science Quiz",
    //       description: "Test your knowledge of scientific principles",
    //       status: "draft",
    //       timeLimit: 15,
    //       questions: [
    //         {
    //           id: "q1",
    //           text: "What is the chemical symbol for gold?",
    //           options: [
    //             { id: "a", text: "Go" },
    //             { id: "b", text: "Au" },
    //             { id: "c", text: "Ag" },
    //             { id: "d", text: "Gd" },
    //           ],
    //           correctAnswerId: "b",
    //         },
    //       ],
    //       createdAt: new Date(Date.now() - 86400000).toISOString(),
    //     },
    //     {
    //       id: "3",
    //       title: "History Quiz",
    //       description: "Test your knowledge of historical events",
    //       status: "published",
    //       timeLimit: 12,
    //       questions: [
    //         {
    //           id: "q1",
    //           text: "In what year did World War II end?",
    //           options: [
    //             { id: "a", text: "1943" },
    //             { id: "b", text: "1944" },
    //             { id: "c", text: "1945" },
    //             { id: "d", text: "1946" },
    //           ],
    //           correctAnswerId: "c",
    //         },
    //         {
    //           id: "q2",
    //           text: "Who was the first President of the United States?",
    //           options: [
    //             { id: "a", text: "Thomas Jefferson" },
    //             { id: "b", text: "John Adams" },
    //             { id: "c", text: "George Washington" },
    //             { id: "d", text: "James Madison" },
    //           ],
    //           correctAnswerId: "c",
    //         },
    //         {
    //           id: "q3",
    //           text: "What was the name of the first artificial satellite launched into space?",
    //           options: [
    //             { id: "a", text: "Sputnik 1" },
    //             { id: "b", text: "Explorer 1" },
    //             { id: "c", text: "Vanguard 1" },
    //             { id: "d", text: "Apollo 1" },
    //           ],
    //           correctAnswerId: "a",
    //         },
    //       ],
    //       createdAt: new Date(Date.now() - 172800000).toISOString(),
    //     },
    //   ],
    // }),
    createQuiz: builder.mutation<
      { id: string },
      {
        title: string
        description: string
        timeLimit: number
        questions: Question[]
      }
    >({
      query: (data) => ({
        url: "/quizzes",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["AdminQuizzes"],
      // Mock response
      transformResponse: () => ({
        id: `quiz-${Date.now()}`,
      }),
    }),
    updateQuiz: builder.mutation<
      void,
      {
        id: string
        title: string
        description: string
        status: "published" | "draft"
      }
    >({
      query: ({ id, ...data }) => ({
        url: `/quizzes/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["AdminQuizzes"],
    }),
    deleteQuiz: builder.mutation<void, string>({
      query: (id) => ({
        url: `/quizzes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["AdminQuizzes"],
    }),
    getQuizAnalytics: builder.query<QuizAnalyticsData, void>({
      query: () => "/analytics",
      // Mock data for development
      transformResponse: () => ({
        totalQuizzes: 24,
        newQuizzes: 5,
        totalAttempts: 1248,
        newAttempts: 187,
        averageScore: 72,
        scoreChange: 3,
        attemptsOverTime: Array.from({ length: 30 }, (_, i) => ({
          date: new Date(Date.now() - i * 86400000).toLocaleDateString(),
          attempts: Math.floor(Math.random() * 50) + 20,
        })).reverse(),
        quizPerformance: [
          { title: "Technology", score: 78 },
          { title: "Science", score: 65 },
          { title: "History", score: 72 },
          { title: "Geography", score: 81 },
          { title: "Literature", score: 68 },
        ],
        popularQuizzes: [
          { title: "Technology", attempts: 320 },
          { title: "Geography", attempts: 280 },
          { title: "History", attempts: 240 },
          { title: "Science", attempts: 210 },
          { title: "Literature", attempts: 198 },
        ],
        topPerformers: [
          { name: "Sophia C.", score: 92 },
          { name: "Emma E.", score: 88 },
          { name: "Andrew W.", score: 85 },
          { name: "Raya G.", score: 82 },
          { name: "Olivia A.", score: 79 },
        ],
        userActivity: Array.from({ length: 30 }, (_, i) => ({
          date: new Date(Date.now() - i * 86400000).toLocaleDateString(),
          users: Math.floor(Math.random() * 30) + 10,
        })).reverse(),
      }),
    }),
  }),
})

export const {
  // useGetAdminQuizzesQuery,
  useCreateQuizMutation,
  useUpdateQuizMutation,
  useDeleteQuizMutation,
  useGetQuizAnalyticsQuery,
} = adminApi

