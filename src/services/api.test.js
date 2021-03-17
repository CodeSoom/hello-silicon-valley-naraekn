import {
  getTest,
  getInitialTest,
} from './api';

jest.mock('../assets/images');

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
