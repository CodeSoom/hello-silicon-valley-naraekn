import { createSlice } from '@reduxjs/toolkit';

import {
  getTest,
  getInitialTest,
} from './services/api';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    currentTest: null,
    selectedAnswer: null,
    savedAnswers: {},
  },
  reducers: {
    setCurrentTest(state, { payload: test }) {
      return {
        ...state,
        currentTest: test,
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

export function loadTest(id) {
  return (dispatch) => {
    const test = getTest(id);

    dispatch(setCurrentTest(test));
  };
}

export function loadInitialTest() {
  return (dispatch) => {
    const test = getInitialTest();

    dispatch(setCurrentTest(test));
  };
}

export default reducer;
