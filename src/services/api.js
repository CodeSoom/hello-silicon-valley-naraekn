import questionnaire from '../data/questionnaire';
import questionnaireImages from '../data/questionnaire-images';
import scores from '../data/scores';
import results from '../data/results';

export const getTest = (testId) => questionnaire.find(({ id }) => id === testId);

// TODO: Refactor this function
export const getTestImages = (testId) => questionnaireImages
  .find(({ id }) => id === testId);

export const getInitialTest = () => questionnaire[0];

export const getInitialTestImages = () => questionnaireImages[0];

export const getScores = () => scores;

export const getResult = (resultId) => results.find(({ id }) => id === resultId);
