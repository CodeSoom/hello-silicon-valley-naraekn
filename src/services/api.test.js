import {
  getTest,
  getInitialTest,
} from './api';

describe('api', () => {
  describe('getTest', () => {
    it('returns question or overview', async () => {
      const { id } = getTest(2);

      expect(id).toEqual(2);
    });
  });

  describe('getIntialTest', () => {
    it('returns question or overview', async () => {
      const { id } = getInitialTest();

      expect(id).toEqual(1);
    });
  });
});
