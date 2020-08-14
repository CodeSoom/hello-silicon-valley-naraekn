import reducer from './reducer';

import {
  setTest,
  setTestImages,
  setAnswer,
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

  describe('setTestImages', () => {
    it('changes current test images', () => {
      const previousState = { testImages: null };

      // TODO: Make fixture
      const images = {
        id: 1,
        images: { feed: [] },
      };

      const { testImages } = reducer(previousState, setTestImages(images));

      expect(testImages).toEqual(images);
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

  describe('setResult', () => {
    it('changes a result', () => {
      const previousState = { result: null };

      const resultId = 1;

      const { result } = reducer(
        previousState,
        setResult(resultId),
      );

      expect(result).toEqual(resultId);
    });
  });
});
