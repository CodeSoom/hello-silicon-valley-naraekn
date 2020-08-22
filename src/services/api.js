import questionnaire from '../data/questionnaire';
import scores from '../data/scores';
import results from '../data/results';

export const getTest = (id) => questionnaire.find((test) => id === test.id);

export const getInitialTest = () => questionnaire[0];

export const getScores = () => scores;

export const getResult = (id) => results.find((result) => id === result.id);
