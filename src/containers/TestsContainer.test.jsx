import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import TestsContainer from './TestsContainer';

import { setCurrentTest } from '../slice';

jest.mock('react-redux');

describe('TestsContainer', () => {
  const dispatch = jest.fn();

  const currentTest = 2;
  const selectedAnswer = 1;
  const savedAnswers = {};

  const renderTestsContainer = () => render((
    <TestsContainer />
  ));

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      currentTest,
      selectedAnswer,
      savedAnswers,
    }));
  });

  context('when `back` button is clicked', () => {
    it('dispatches setCurrentTest with `currentTest - 1`', () => {
      const { getByText } = renderTestsContainer();

      fireEvent.click(getByText(/back/));

      expect(dispatch).toBeCalledWith(setCurrentTest(currentTest - 1));
    });
  });

  context('when `next` button is clicked', () => {
    it('dispatches setCurrentTest with `currentTest + 1`', () => {
      const { getByText } = renderTestsContainer();

      fireEvent.click(getByText(/next/));

      expect(dispatch).toBeCalledWith(setCurrentTest(currentTest + 1));
    });
  });
});
