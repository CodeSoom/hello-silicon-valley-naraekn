import questionnaire from '../data/questionnaire';
import scores from '../data/scores';

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
