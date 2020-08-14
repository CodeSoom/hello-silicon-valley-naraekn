import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import WhoAreYou from '../components/WhoAreYou';

import {
  setAnswer,
  setTest,
  loadTest,
  loadResult,
} from '../slice';

import { get } from '../utils';

export default function WhoAreYouContainer({ handleClickLink }) {
  const dispatch = useDispatch();

  const answers = useSelector(get('answers'));
  const test = useSelector(get('test'));
  const images = useSelector(get('testImages'));

  function handleClickOption({ questionId, answerId }) {
    dispatch(setAnswer({ questionId, answerId }));
  }

  function handleClickNavigation(id) {
    dispatch(loadTest(id));
  }

  function handleClickSubmit(savedAnswers) {
    dispatch(setTest(null));
    dispatch(loadResult(savedAnswers));
    handleClickLink('/result');
  }

  // TODO: const { id } = test;

  // TODO: const selectedAnswer = answers[id] || null;

  return (
    <>
      <WhoAreYou
        test={test}
        images={images}
        handleClickOption={handleClickOption}
        handleClickNavigation={handleClickNavigation}
        handleClickSubmit={() => handleClickSubmit(answers)}
      />
    </>
  );
}
