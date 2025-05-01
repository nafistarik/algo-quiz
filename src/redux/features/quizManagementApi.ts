import { baseApi } from "../api/baseApi";

const quizManagementApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllQuiz: build.query({
      query: () => {
        return {
          url: "/admin/quizzes",
          method: "GET",
        };
      },
      providesTags: ["Quiz"],
    }),
    createQuiz: build.mutation({
      query: (data) => {
        return {
          url: "/admin/quizzes",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Quiz"],
    }),
    updateQuiz: build.mutation({
      query: ({ id, data }) => {
        return {
          url: `/admin/quizzes/${id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["Quiz"],
    }),
    deleteQuiz: build.mutation({
      query: ({ id}) => {
        return {
          url: `/admin/quizzes/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Quiz"],
    }),
  }),
});

export const { useGetAllQuizQuery, useCreateQuizMutation, useUpdateQuizMutation, useDeleteQuizMutation } = quizManagementApi;
