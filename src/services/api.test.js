import {
  getTest,
  getInitialTest,
} from './api';

// TODO: Make an api test more meaningful
// TODO: Add a test for getScore

describe('api', () => {
  describe('getTest', () => {
    it('returns question or overview', () => {
      const { id } = getTest(2);

      expect(id).toEqual(2);
    });
  });

  describe('getIntialTest', () => {
    it('returns question or overview', () => {
      const { id } = getInitialTest();

      expect(id).toEqual(1);
    });
  });
});
