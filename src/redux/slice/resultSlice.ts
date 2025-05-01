import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface ResultState {
  result: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const initialState: ResultState = {
  result: {},
};

const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    setResult: (state, action) => {
      if (!state.result) {
        state.result = {};
      }
      const {userId, quizId, result } = action.payload;
      if (!state.result[userId]) {
        state.result[userId] = {};
      }
      state.result[userId][quizId] = result;
    },
  },
});

export const { setResult } = resultSlice.actions;
export const selectResultByQuizId = (userId: string, quizId: string) => (state: RootState) =>
    state.result.result?.[userId]?.[quizId] ?? null;
export default resultSlice.reducer;