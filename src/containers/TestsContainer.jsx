import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import TestContent from '../components/TestContent';
import TestNavigationButtons from '../components/TestNavigationButtons';

import {
  setSelectedAnswer,
  saveAnswer,
  loadTest,
} from '../slice';

import { get } from '../utils';

export default function TestsContainer() {
  const dispatch = useDispatch();

  const selectedAnswer = useSelector(get('selectedAnswer'));
  const savedAnswers = useSelector(get('savedAnswers'));
  const currentTest = useSelector(get('currentTest'));

  function handleClickAnswer(answerId) {
    dispatch(setSelectedAnswer(answerId));
  }

  function handleClickBack({
    test: { previousId }, answers,
  }) {
    const selectedId = answers[previousId] || null;

    dispatch(setSelectedAnswer(selectedId));
    dispatch(loadTest(previousId));
  }

  function handleClickNext({
    test: { id, nextId }, answer,
  }) {
    dispatch(saveAnswer({ questionId: id, answerId: answer }));
    dispatch(setSelectedAnswer(null));
    dispatch(loadTest(nextId));
  }

  return (
    <>
      <TestContent
        test={currentTest}
        selectedAnswer={selectedAnswer}
        handleClickAnswer={handleClickAnswer}
      />
      <TestNavigationButtons
        handleClickBack={() => handleClickBack({
          test: currentTest,
          answers: savedAnswers,
        })}
        handleClickNext={() => handleClickNext({
          test: currentTest,
          answer: selectedAnswer,
        })}
      />
    </>
  );
}
