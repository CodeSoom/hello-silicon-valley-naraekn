import { createSlice } from '@reduxjs/toolkit';

import {
  getTest,
  getInitialTest,
  getScores,
  getResult,
  getInitialTestImages,
} from './services/api';

import {
  calculateScore,
  findTopScore,
} from './utils';
import { getTestImages } from './services/__mocks__/api';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    test: null,
    testImages: null,
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
    setTestImages(state, { payload: testImages }) {
      return {
        ...state,
        testImages,
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
  setTestImages,
  setAnswer,
  setResult,
} = actions;

export function loadTest(id) {
  return (dispatch) => {
    const test = getTest(id);
    const testImages = getTestImages(id);

    dispatch(setTest(test));
    dispatch(setTestImages(testImages));
  };
}

export function loadInitialTest() {
  return (dispatch) => {
    const test = getInitialTest();
    const testImages = getInitialTestImages();

    dispatch(setTest(test));
    dispatch(setTestImages(testImages));
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
