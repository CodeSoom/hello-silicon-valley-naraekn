import reducer from './reducer';

import { setCurrentTest, setSelectedAnswer } from './slice';

describe('reducer', () => {
  context('Before any action is executed', () => {
    it('returns initial state', () => {
      const initialState = {
        currentTest: 0,
        selectedAnswer: null,
      };

      // TODO: Find a way to remove `undefined`

      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setCurrentTest', () => {
    it('changes current test', () => {
      const previousState = {
        currentTest: 0,
      };

      const state = reducer(previousState, setCurrentTest(1));

      expect(state.currentTest).toEqual(1);
    });
  });

  describe('setSelectedAnswer', () => {
    it('changes the selected answer', () => {
      const previousState = {
        selectedAnswer: null,
      };

      const state = reducer(previousState, setSelectedAnswer(1));

      expect(state.selectedAnswer).toEqual(1);
    });
  });
});
