import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import TestContent from '../components/TestContent';
import TestNavigationButtons from '../components/TestNavigationButtons';

import {
  setCurrentTest,
  setSelectedAnswer,
  saveAnswer,
  loadTest,
} from '../slice';

import { get } from '../utils';

// TODO: Too complicated - Find a way to make TestsContainer simpler

export default function TestsContainer({ handleClickLink }) {
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

  function handleClickSubmit() {
    handleClickLink('/result');
    dispatch(setSelectedAnswer(null));
    dispatch(setCurrentTest(null));
  }

  // TODO: Find a way to make handleClickBack and handleClickNext props

  return (
    <>
      <TestContent
        test={currentTest}
        selectedAnswer={selectedAnswer}
        handleClickAnswer={handleClickAnswer}
      />
      <TestNavigationButtons
        test={currentTest}
        handleClickBack={() => handleClickBack({
          test: currentTest,
          answers: savedAnswers,
        })}
        handleClickNext={() => handleClickNext({
          test: currentTest,
          answer: selectedAnswer,
        })}
        handleClickSubmit={handleClickSubmit}
      />
    </>
  );
}
