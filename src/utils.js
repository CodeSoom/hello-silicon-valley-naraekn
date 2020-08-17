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

// TODO: Find a way to make the expression simpler
export function calculateScore({ answers, scores }) {
  function addScores(accumulator, score) {
    const newAccumulator = {};

    Object.keys(accumulator).forEach((key) => {
      newAccumulator[key] = accumulator[key] + score[key];
    });

    return newAccumulator;
  }

  const totalScore = Object.entries(answers)
    .map(([key, value]) => scores[key][value])
    .reduce(addScores);

  return totalScore;
}

export function findTopScore(score) {
  const topScoreKey = Object.keys(score)
    .reduce((a, b) => (score[a] > score[b] ? a : b));
  return parseInt(topScoreKey, 10);
}
