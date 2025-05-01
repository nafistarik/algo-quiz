import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import userReducer from "./slice/userSlice";
import resultReducer from "./slice/resultSlice";

export const rootReducer = combineReducers({
  user: userReducer,
  result : resultReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;