import {
  get,
  equal,
  isOverview,
  isQuestion,
  isNextButtonDisabled,
  calculatePercent,
  calculateScore,
  findResultIds,
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

test('isOverview', () => {
  const trueResult = isOverview('overview');
  const falseResult = isOverview('somethingWrong');

  expect(trueResult).toBeTruthy();
  expect(falseResult).toBeFalsy();
});

test('isQuestion', () => {
  const trueResult = isQuestion('question');
  const falseResult = isQuestion('somethingWrong');

  expect(trueResult).toBeTruthy();
  expect(falseResult).toBeFalsy();
});

test('isNextButtonDisabled', () => {
  const trueResult = isNextButtonDisabled(null, 'question');
  const falseResult1 = isNextButtonDisabled(1, 'question');
  const falseResult2 = isNextButtonDisabled(null, 'overview');

  expect(trueResult).toBeTruthy();
  expect(falseResult1).toBeFalsy();
  expect(falseResult2).toBeFalsy();
});

test('calculatePercent', () => {
  expect(calculatePercent(2, 5)).toBe(40);
  expect(calculatePercent(3, 5)).toBe(60);
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

test('findResultIds', () => {
  const scores = {
    1: 10,
    2: 0,
    3: 5,
    4: 5,
    5: 8,
  };

  const resultIds = {
    firstId: 1,
    secondId: 5,
    lastId: 2,
  };

  const result = findResultIds(scores);

  expect(result).toEqual(resultIds);
});
