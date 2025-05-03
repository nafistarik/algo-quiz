import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASEAPI = "http://74.225.203.210:5000/api"

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASEAPI,
    prepareHeaders: (headers: Headers) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: [
    "Auth",
    "Quiz",
    "Questions",
  ],
});
export const {} = baseApi;

// export const baseApi = createApi({
//   reducerPath: "api",
//   baseQuery: baseQueryWithReauth, // ✅ Use the custom base query here
//   endpoints: () => ({}),
//   tagTypes: ["Auth"],
// });
