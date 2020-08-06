import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    currentTest: 1,
    selectedAnswer: null,
    savedAnswers: {},
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
    saveAnswer(state, { payload: { questionId, answerId } }) {
      const { savedAnswers } = state;

      return {
        ...state,
        savedAnswers: {
          ...savedAnswers,
          [questionId]: answerId,
        },
      };
    },
  },
});

export const {
  setCurrentTest,
  setSelectedAnswer,
  saveAnswer,
} = actions;

export default reducer;
