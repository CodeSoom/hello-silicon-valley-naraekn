import reducer from './reducer';

import {
  setTest,
  setAnswer,
  initializeAnswers,
  setResult,
} from './slice';

import OVERVIEW from '../fixtures/overview';

jest.mock('./assets/images');

describe('reducer', () => {
  describe('setTest', () => {
    it('changes current test', () => {
      const previousState = { test: null };

      const { test } = reducer(previousState, setTest(OVERVIEW));

      expect(test).toEqual(OVERVIEW);
    });
  });

  describe('setAnswer', () => {
    const questionId = 2;
    const answerId = 1;

    it('appends the answerId to answers', () => {
      const previousState = {
        answers: {},
      };

      const { answers } = reducer(
        previousState,
        setAnswer({ questionId, answerId }),
      );

      expect(answers[questionId]).toEqual(answerId);
    });
  });

  describe('initializeAnswers', () => {
    it('sets the answers to an empty object', () => {
      const previousState = {
        answers: {},
      };

      const { answers } = reducer(
        previousState,
        initializeAnswers(),
      );

      expect(answers).toMatchObject({});
    });
  });

  describe('setResult', () => {
    it('changes a result', () => {
      const previousState = {
        result: {
          first: null,
          second: null,
          last: null,
        },
      };

      const resultIds = {
        first: 1,
        second: 2,
        last: 4,
      };

      const { result } = reducer(
        previousState,
        setResult(resultIds),
      );

      expect(result).toEqual(resultIds);
    });
  });
});
