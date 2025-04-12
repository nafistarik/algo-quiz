import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    //create user
    createUser: build.mutation({
      query: (data) => {
        return {
          url: `/auth/register`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Auth"],
    }),

    // login user
    loginUser: build.mutation({
      query: (data) => {
        return {
          url: "/auth/login",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Auth"],
    }),
    
  }),
});

export const { useCreateUserMutation, useLoginUserMutation } = authApi;
