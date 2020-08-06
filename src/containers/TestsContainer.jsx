import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import TestContent from '../components/TestContent';
import TestNavigationButtons from '../components/TestNavigationButtons';

import {
  setCurrentTest, setSelectedAnswer, saveAnswer,
} from '../slice';

import { getTest } from '../services/api';

import { get } from '../utils';

export default function TestsContainer() {
  const dispatch = useDispatch();

  const selectedAnswer = useSelector(get('selectedAnswer'));
  const savedAnswers = useSelector(get('savedAnswers'));
  const currentTest = useSelector(get('currentTest'));

  const { type, content } = getTest(currentTest);

  function handleClickAnswer(answerId) {
    dispatch(setSelectedAnswer(answerId));
  }

  function handleClickBack() {
    const answerBefore = savedAnswers[currentTest - 1] || null;

    dispatch(setSelectedAnswer(answerBefore));

    dispatch(setCurrentTest(currentTest - 1));
  }

  function handleClickNext() {
    if (type === 'question') {
      dispatch(saveAnswer({
        questionId: currentTest,
        answerId: selectedAnswer,
      }));
      dispatch(setSelectedAnswer(null));
    }
    dispatch(setCurrentTest(currentTest + 1));
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
        handleClickBack={handleClickBack}
        handleClickNext={handleClickNext}
      />
    </>
  );
}
