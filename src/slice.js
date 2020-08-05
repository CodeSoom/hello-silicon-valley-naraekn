import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    currentTest: 0,
    selectedAnswer: null,
  },
  reducers: {
    setCurrentTest(state, { payload: currentTest }) {
      return {
        ...state,
        currentTest,
      };
    },
    setSelectedAnswer(state, { payload: selectedAnswer }) {
      return {
        ...state,
        selectedAnswer,
      };
    },
  },
});

export const {
  setCurrentTest,
  setSelectedAnswer,
} = actions;

export default reducer;
