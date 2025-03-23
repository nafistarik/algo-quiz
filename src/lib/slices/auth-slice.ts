import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface AuthState {
  isAuthenticated: boolean
  user: {
    id: string
    name: string
    email: string
    avatar?: string
    role: "user" | "admin"
  } | null
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{
        user: {
          id: string
          name: string
          email: string
          avatar?: string
          role: "user" | "admin"
        }
      }>,
    ) => {
      state.isAuthenticated = true
      state.user = action.payload.user
    },
    logout: (state) => {
      state.isAuthenticated = false
      state.user = null
    },
  },
})

export const { setCredentials, logout } = authSlice.actions
export default authSlice.reducer

