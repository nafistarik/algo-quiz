import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface UiState {
  toast: {
    open: boolean
    message: string
    type: "success" | "error" | "info"
  }
}

const initialState: UiState = {
  toast: {
    open: false,
    message: "",
    type: "info",
  },
}

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showToast: (
      state,
      action: PayloadAction<{
        message: string
        type: "success" | "error" | "info"
      }>,
    ) => {
      state.toast = {
        open: true,
        message: action.payload.message,
        type: action.payload.type,
      }
    },
    hideToast: (state) => {
      state.toast.open = false
    },
  },
})

export const { showToast, hideToast } = uiSlice.actions
export default uiSlice.reducer

