/* eslint-disable */
import {
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import { removeUser, setUser } from "../slice/userSlice";

const BASEAPI = "https://course-platform-api-kkbn.onrender.com/api";

const rawBaseQuery = fetchBaseQuery({
  baseUrl: BASEAPI,
  prepareHeaders: (headers, {}) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseQueryWithReauth: BaseQueryFn<
  any,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await rawBaseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) {
      api.dispatch(removeUser());
      return result;
    }

    // Attempt to refresh token
    const refreshResult: any = await rawBaseQuery(
      {
        url: "/auth/refresh-token",
        method: "POST",
        body: { refreshToken },
      },
      api,
      extraOptions
    );

    if (refreshResult?.data?.accessToken) {
      const {
        accessToken,
        refreshToken: newRefreshToken,
        user,
      } = refreshResult.data;

      localStorage.setItem("accessToken", accessToken);
      if (newRefreshToken) {
        localStorage.setItem("refreshToken", newRefreshToken);
      }
      api.dispatch(setUser({ data: { ...user, accessToken } }));

      result = await rawBaseQuery(args, api, extraOptions);
    } else {
      api.dispatch(removeUser());
    }
  }

  return result;
};
