import reducer from './reducer';

import {
  setTest,
  setAnswer,
} from './slice';

import OVERVIEW from '../fixtures/overview';

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
});
