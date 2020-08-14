import questionnaire from '../data/questionnaire';
import questionnaireImages from '../data/questionnaire-images';
import scores from '../data/scores';
import results from '../data/results';

export const getTest = (id) => questionnaire.find((test) => id === test.id);

export const getTestImages = (id) => {
  const { images } = questionnaireImages.find(
    (questionnaireImage) => questionnaireImage.id === id,
  );

  return images;
};

export const getInitialTest = () => questionnaire[0];

export const getInitialTestImages = () => questionnaireImages[0].images;

export const getScores = () => scores;

export const getResult = (id) => results.find((result) => id === result.id);
