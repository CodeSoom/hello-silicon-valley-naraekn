import { createSlice } from '@reduxjs/toolkit';

import {
  getTest,
  getInitialTest,
  getScores,
  getResult,
} from './services/api';

import {
  calculateScore,
  findResultIds,
} from './utils';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    test: null,
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
    initializeAnswers(state) {
      return {
        ...state,
        answers: {},
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
  setAnswer,
  initializeAnswers,
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
