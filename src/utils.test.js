import {
  get,
  equal,
  calculateScore,
  findTopScore,
} from './utils';

test('get', () => {
  const state = {
    name: '홍길동',
  };

  const f = get('name');
  const g = get('age');

  expect(f(state)).toBe('홍길동');
  expect(g(state)).toBeUndefined();
});

test('equal', () => {
  const state = {
    name: '홍길동',
  };

  const f = equal('name', '홍길동');
  const g = equal('name', '임꺽정');

  expect(f(state)).toBeTruthy();
  expect(g(state)).toBeFalsy();
});

test('calculateScore', () => {
  const answers = {
    1: 1,
    2: 3,
  };

  const scores = {
    1: {
      1: { 1: 2, 2: 4 },
    },
    2: {
      3: { 1: 7, 2: 8 },
    },
  };

  const score = calculateScore({ answers, scores });

  expect(score).toEqual({ 1: 9, 2: 12 });
});

describe('findTopScore', () => {
  it('returns an key of the top score', () => {
    const score = { 1: 9, 2: 12 };

    const result = findTopScore(score);

    expect(result).toBe(2);
  });

  context('when scores are tied', () => {
    it('returns one randomly', () => {
      const score = { 1: 9, 2: 12, 3: 12 };

      const result = findTopScore(score);

      expect(result === 2 || result === 3).toBeTruthy();
    });
  });
});
