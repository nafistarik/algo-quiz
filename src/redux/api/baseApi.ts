import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASEAPI = "https://course-platform-api-kkbn.onrender.com/api"

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASEAPI,
    prepareHeaders: (headers: Headers) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        headers.set("authorization", ` ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: [
    "Auth",
  ],
});
export const {} = baseApi;

// export const baseApi = createApi({
//   reducerPath: "api",
//   baseQuery: baseQueryWithReauth, // ✅ Use the custom base query here
//   endpoints: () => ({}),
//   tagTypes: ["Auth"],
// });
