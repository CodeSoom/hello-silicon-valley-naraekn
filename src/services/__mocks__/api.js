import SCORES from '../../../fixtures/scores';

export function getTest(testId) {
  return { id: testId };
}

export function getInitialTest() {
  return { id: 1 };
}

export function getScores() {
  return SCORES;
}

export function getResult(resultId) {
  return { id: resultId };
}
