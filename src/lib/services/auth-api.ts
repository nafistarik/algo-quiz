/* eslint-disable */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { setCredentials } from "@/lib/slices/auth-slice"

// This would be replaced with your actual API base URL
const baseUrl = "/api/auth"

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    login: builder.mutation<
      { user: { id: string; name: string; email: string; role: string } },
      { email: string; password: string; userType: string }
    >({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
      // Mock response and automatically set credentials
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(
            setCredentials({
              user: {
                id: "user-123",
                name: "John Doe",
                email: "john.doe@example.com",
                role: "user",
              },
            }),
          )
        } catch (error) {
          // Handle error
        }
      },
    }),
    register: builder.mutation<
      { user: { id: string; name: string; email: string; role: string } },
      {
        name: string
        email: string
        password: string
        userType: string
      }
    >({
      query: (credentials) => ({
        url: "/register",
        method: "POST",
        body: credentials,
      }),
      // Mock response and automatically set credentials
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          dispatch(
            setCredentials({
              user: {
                id: "user-123",
                name: "John Doe",
                email: "john.doe@example.com",
                role: "user",
              },
            }),
          )
        } catch (error) {
          // Handle error
        }
      },
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),
  }),
})

export const { useLoginMutation, useRegisterMutation, useLogoutMutation } = authApi

