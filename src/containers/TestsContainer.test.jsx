import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import TestsContainer from './TestsContainer';

import QUESTION from '../../fixtures/question';

jest.mock('react-redux');

describe('TestsContainer', () => {
  const dispatch = jest.fn();

  const renderTestsContainer = () => render((
    <TestsContainer />
  ));

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      currentTest: QUESTION,
      selectedAnswer: null,
      savedAnswers: {},
    }));
  });

  context('when an answer button is clicked', () => {
    it('dispatches setSelectedAnswer`', () => {
      const { getByText } = renderTestsContainer();

      const { content: { answers } } = QUESTION;

      fireEvent.click(getByText(answers[0].title));

      expect(dispatch).toBeCalledWith({
        payload: answers[0].id,
        type: 'application/setSelectedAnswer',
      });
    });
  });

  context('when `back` button is clicked', () => {
    it('dispatches setSelectedAnswer and loadTest`', () => {
      const { getByText } = renderTestsContainer();

      fireEvent.click(getByText(/back/));

      expect(dispatch).toBeCalledTimes(2);
    });
  });

  context('when `next` button is clicked', () => {
    it('dispatches saveAnswer, setSelctedAnswer, and loadTest`', () => {
      const { getByText } = renderTestsContainer();

      fireEvent.click(getByText(/next/));

      expect(dispatch).toBeCalledTimes(3);
    });
  });
});
