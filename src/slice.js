import { createSlice } from '@reduxjs/toolkit';

import {
  getTest,
  getInitialTest,
  getScores,
  getResult,
} from './services/api';

import {
  calculateScore,
  findTopScore,
} from './utils';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    test: null,
    answers: {},
    result: null,
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
    setResult(state, { payload: result }) {
      return {
        ...state,
        result,
      };
    },
  },
});

export const {
  setTest,
  setAnswer,
  setResult,
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

// TODO: Check if the function below is too complicated

export function loadResult(answers) {
  return (dispatch) => {
    const scores = getScores();

    const score = calculateScore({ answers, scores });

    const resultId = findTopScore(score);

    const result = getResult(resultId);

    dispatch(setResult(result));
  };
}

export default reducer;
