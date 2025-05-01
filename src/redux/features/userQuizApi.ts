import { baseApi } from "../api/baseApi";

const userQuizApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUserQuizzes: build.query({
      query: () => {
        return {
          url: "/quizzes",
          method: "GET",
        };
      },
      providesTags: ["Quiz"],
    }),
    getQuizDetails : build.query({
      query : (quizId) => {
        return {
          url: `/quizzes/${quizId}`,
          method: "GET",
        };
      },
      providesTags: ["Quiz"],
    }),
    submitQuiz: build.mutation({
      query: ({ quizId, data }) => {
        return {
          url: `/quizzes/${quizId}/attempt`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Quiz"],
    }),
    getLeaderboard: build.query({
      query: (quizId) => {
        return {
          url: `/quizzes/${quizId}/attempts`,
          method: "GET",
        };
      },
      providesTags: ["Quiz"],
    })
  }),
});

export const { useGetUserQuizzesQuery, useGetQuizDetailsQuery, useSubmitQuizMutation, useGetLeaderboardQuery } = userQuizApi;
