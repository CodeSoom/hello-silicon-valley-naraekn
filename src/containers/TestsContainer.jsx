import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Test from '../components/Test';

import questionnaire from '../data/questionnaire';

import { setCurrentTest } from '../slice';

import { get } from '../utils';

export default function TestsContainer() {
  const dispatch = useDispatch();

  const currentTest = useSelector(get('currentTest'));

  const { type, content } = questionnaire[currentTest || 0];

  function handleClickAnswer() {
    // TODO: dispatch ..
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
      <Test
        type={type}
        content={content}
        handleClickAnswer={handleClickAnswer}
        handleClickBack={() => handleClickBack(currentTest)}
        handleClickNext={() => handleClickNext(currentTest)}
      />
    </>
  );
}
