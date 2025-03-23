import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { quizApi } from "@/lib/services/quiz-api"
import { adminApi } from "@/lib/services/admin-api"
import { userApi } from "@/lib/services/user-api"
import { authApi } from "@/lib/services/auth-api"
import authReducer from "@/lib/slices/auth-slice"
import uiReducer from "@/lib/slices/ui-slice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
    [quizApi.reducerPath]: quizApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(quizApi.middleware, adminApi.middleware, userApi.middleware, authApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

