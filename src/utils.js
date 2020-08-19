export function get(key) {
  return (obj) => obj[key];
}

export function equal(key, value) {
  return (obj) => obj[key] === value;
}

export const isOverview = (type) => type === 'overview';

export const isQuestion = (type) => type === 'question';

export const isNextButtonDisabled = (selected, type) => (
  (selected === null) && (type === 'question')
);

export const calculatePercent = (current, all) => (current / all) * 100;

export function calculateScore({ answers, scores }) {
  const addScores = (accumulator, score) => {
    const newAccumulator = {};

    Object.keys(accumulator).forEach((key) => {
      newAccumulator[key] = accumulator[key] + score[key];
    });

    return newAccumulator;
  };

  const totalScore = Object.entries(answers)
    .map(([key, value]) => scores[key][value])
    .reduce(addScores);

  return totalScore;
}

export function findResultIds(scores) {
  const sortedScores = Object.entries(scores)
    .sort((a, b) => (b[1] - a[1]));

  const getId = (index) => parseInt(sortedScores[index][0], 10);

  const resultIds = {
    firstId: getId(0),
    secondId: getId(1),
    lastId: getId(sortedScores.length - 1),
  };

  return resultIds;
}
