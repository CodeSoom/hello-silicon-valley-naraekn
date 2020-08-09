import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import TestContent from '../components/TestContent';
import TestNavigationButtons from '../components/TestNavigationButtons';

import {
  setAnswer,
  setTest,
  loadTest,
  loadResult,
} from '../slice';

import { get } from '../utils';

export default function TestsContainer({ handleClickLink }) {
  const dispatch = useDispatch();

  const answers = useSelector(get('answers'));
  const test = useSelector(get('test'));

  function handleClickAnswer({ questionId, answerId }) {
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

  const {
    id, previousId, nextId, type, content,
  } = test;

  const selectedAnswer = answers[id] || null;

  // TODO: Too many props - Find a way to reduce a number of props

  return (
    <>
      <TestContent
        id={id}
        type={type}
        content={content}
        selectedAnswer={selectedAnswer}
        handleClickAnswer={handleClickAnswer}
      />
      <TestNavigationButtons
        previousId={previousId}
        nextId={nextId}
        handleClickNavigation={handleClickNavigation}
        handleClickSubmit={() => handleClickSubmit(answers)}
      />
    </>
  );
}
