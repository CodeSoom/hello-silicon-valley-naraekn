import reducer from './reducer';

import {
  setTest,
  setTestImages,
  setAnswer,
  setResult,
} from './slice';

import OVERVIEW from '../fixtures/overview';
import IMAGES from '../fixtures/images';

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

      const images = { id: 1, images: IMAGES };

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
