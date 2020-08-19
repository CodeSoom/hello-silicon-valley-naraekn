import { createSlice } from '@reduxjs/toolkit';

import {
  getTest,
  getInitialTest,
  getScores,
  getResult,
  getInitialTestImages,
  getTestImages,
} from './services/api';

import {
  calculateScore,
  findResultIds,
} from './utils';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    test: null,
    testImages: null,
    answers: {},
    result: {
      first: null,
      second: null,
      last: null,
    },
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
    setResult(state, { payload: { first, second, last } }) {
      return {
        ...state,
        result: {
          first,
          second,
          last,
        },
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
    const images = getTestImages(id);

    dispatch(setTest(test));
    dispatch(setTestImages(images));
  };
}

export function loadInitialTest() {
  return (dispatch) => {
    const test = getInitialTest();
    const images = getInitialTestImages();

    dispatch(setTest(test));
    dispatch(setTestImages(images));
  };
}
// TODO: Use better variable names
export function loadResult(answers) {
  return (dispatch) => {
    const scores = getScores();

    const totalScore = calculateScore({ answers, scores });

    const { firstId, secondId, lastId } = findResultIds(totalScore);

    const results = {
      first: getResult(firstId),
      second: getResult(secondId),
      last: getResult(lastId),
    };

    dispatch(setResult(results));
  };
}

export default reducer;
