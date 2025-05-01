import { baseApi } from "../api/baseApi";

const questionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createQuestion: build.mutation({
      query: ({ id, data }) => {
        return {
          url: `admin/quizzes/${id}/questions`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Questions"],
    }),
    updateQuestion: build.mutation({
      query: ({ id, data }) => {
        return {
          url: `/admin/questions/${id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["Questions"],
    }),
    deleteQuestion: build.mutation({
      query: ({ id }) => {
        return {
          url: `/admin/questions/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Questions"],
    }),
  }),
});

export const {
  useCreateQuestionMutation,
  useUpdateQuestionMutation,
  useDeleteQuestionMutation,
} = questionApi;
