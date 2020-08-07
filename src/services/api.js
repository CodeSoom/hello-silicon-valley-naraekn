import questionnaire from '../data/questionnaire';

export function getTest(testId) {
  const test = questionnaire
    .find(({ id }) => id === testId);

  return test;
}

// TODO: Use getInitialTest when the user clicked `test` button in HomePage

export function getInitialTest() {
  return questionnaire[0];
}
