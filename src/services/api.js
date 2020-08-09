import questionnaire from '../data/questionnaire';
import scores from '../data/scores';
import results from '../data/results';

export function getTest(testId) {
  const test = questionnaire
    .find(({ id }) => id === testId);

  return test;
}

export function getInitialTest() {
  return questionnaire[0];
}

export function getScores() {
  return scores;
}

export function getResult(resultId) {
  const result = results
    .find(({ id }) => id === resultId);

  return result;
}
