import reducer from './reducer';

import {
  setCurrentTest,
  setSelectedAnswer,
  saveAnswer,
} from './slice';

import OVERVIEW from '../fixtures/overview';

describe('reducer', () => {
  describe('setCurrentTest', () => {
    it('changes current test', () => {
      const previousState = { currentTest: null };

      const { currentTest } = reducer(previousState, setCurrentTest(OVERVIEW));

      expect(currentTest).toEqual(OVERVIEW);
    });
  });

  describe('setSelectedAnswer', () => {
    it('changes the selected answer', () => {
      const previousState = { selectedAnswer: null };

      const { selectedAnswer } = reducer(previousState, setSelectedAnswer(1));

      expect(selectedAnswer).toEqual(1);
    });
  });

  describe('saveAnswer', () => {
    const questionId = 2;
    const answerId = 1;

    it('appends the answerId to savedAnswers', () => {
      const previousState = { savedAnswers: {} };

      const { savedAnswers } = reducer(
        previousState,
        saveAnswer({ questionId, answerId }),
      );

      expect(savedAnswers[questionId]).toEqual(answerId);
    });
  });
});
