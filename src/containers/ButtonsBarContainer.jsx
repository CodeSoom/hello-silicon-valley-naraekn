import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import ProgressIndicator from '../components/who-are-you/ProgressIndicator';
import NavigationButtons from '../components/NavigationButtons';

import ButtonBarLayout from '../styles/navigation-buttons';

import { questionnaireCount } from '../data/questionniare-meta';

import {
  setTest,
  loadTest,
  loadResult,
  initializeAnswers,
} from '../slice';

import {
  get,
  isOverview,
  calculatePercent,
  scrollToTop,
} from '../utils';

export default function ButtonsBarContainer({ handleClickResult }) {
  const dispatch = useDispatch();

  const test = useSelector(get('test'));
  const answers = useSelector(get('answers'));

  function handleClickBack(previous) {
    dispatch(loadTest(previous));

    scrollToTop();
  }

  function handleClickNext(next) {
    dispatch(loadTest(next));

    scrollToTop();
  }

  function handleClickSubmit(savedAnswers) {
    dispatch(setTest(null));
    dispatch(initializeAnswers());
    dispatch(loadResult(savedAnswers));
    handleClickResult();
    scrollToTop();
  }

  const {
    type, id, previousId, nextId,
  } = test;

  const selectedAnswer = answers[id] || null;

  return (
    <ButtonBarLayout>
      <ProgressIndicator
        hidden={isOverview(type)}
        percent={calculatePercent(id, questionnaireCount)}
      />
      <NavigationButtons
        test={test}
        selectedAnswer={selectedAnswer}
        handleClickBack={() => handleClickBack(previousId)}
        handleClickNext={() => handleClickNext(nextId)}
        handleClickSubmit={() => handleClickSubmit(answers)}
      />
    </ButtonBarLayout>
  );
}
