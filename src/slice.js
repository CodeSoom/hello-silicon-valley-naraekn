import { createSlice } from '@reduxjs/toolkit';

import {
  getTest,
  getInitialTest,
} from './services/api';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    test: null,
    answers: {},
  },
  reducers: {
    setTest(state, { payload: test }) {
      return {
        ...state,
        test,
      };
    },
    setAnswer(state, { payload: { questionId, answerId } }) {
      const { answers } = state;

      return {
        ...state,
        answers: {
          ...answers,
          [questionId]: answerId,
        },
      };
    },
  },
});

export const {
  setTest,
  setAnswer,
} = actions;

export function loadTest(id) {
  return (dispatch) => {
    const test = getTest(id);

    dispatch(setTest(test));
  };
}

export function loadInitialTest() {
  return (dispatch) => {
    const test = getInitialTest();

    dispatch(setTest(test));
  };
}

export default reducer;
