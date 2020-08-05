import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import TestContent from '../components/TestContent';
import TestNavigationButtons from '../components/TestNavigationButtons';

import questionnaire from '../data/questionnaire';

import { setCurrentTest, setSelectedAnswer } from '../slice';

import { get } from '../utils';

export default function TestsContainer() {
  const dispatch = useDispatch();

  const selectedAnswer = useSelector(get('selectedAnswer'));
  const currentTest = useSelector(get('currentTest'));

  const { type, content } = questionnaire[currentTest || 0];

  function handleClickAnswer(answerId) {
    dispatch(setSelectedAnswer(answerId));
  }

  function handleClickBack(currentId) {
    dispatch(setCurrentTest(currentId - 1));
  }

  function handleClickNext(currentId) {
    // TODO: save user's choice
    dispatch(setCurrentTest(currentId + 1));
  }

  return (
    <>
      <TestContent
        type={type}
        content={content}
        selectedAnswer={selectedAnswer}
        handleClickAnswer={handleClickAnswer}
      />
      <TestNavigationButtons
        handleClickBack={() => handleClickBack(currentTest)}
        handleClickNext={() => handleClickNext(currentTest)}
      />
    </>
  );
}
