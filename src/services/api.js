import questionnaire from '../data/questionnaire';

export function getTest(testId) {
  const test = questionnaire
    .find(({ id }) => id === testId);

  return test || questionnaire[0];
}

export function xxx() {
  // TODO: ...
}
