import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import TestsContainer from './TestsContainer';

import CONTENT from '../../fixtures/content';

jest.mock('react-redux');

const mockPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory() {
    return { push: mockPush };
  },
}));

describe('TestsContainer', () => {
  const dispatch = jest.fn();
  const handleClickLink = jest.fn();

  const currentId = 1;

  const renderTestsContainer = () => render((
    <TestsContainer
      handleClickLink={handleClickLink}
    />
  ));

  // TODO: Check if codes below are "clean codes"

  function setTestEnvironment(previousId = 1, nextId = 3) {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      test: {
        type: 'question',
        content: CONTENT,
        id: currentId,
        previousId,
        nextId,
      },
      answers: {},
    }));
  }

  context('when an answer button is clicked', () => {
    beforeEach(() => {
      setTestEnvironment();
    });

    it('dispatches `setAnswer`', () => {
      const { getByText } = renderTestsContainer();

      const { id, title } = CONTENT.answers[0];

      fireEvent.click(getByText(title));

      expect(dispatch).toBeCalledWith({
        type: 'application/setAnswer',
        payload: { questionId: currentId, answerId: id },
      });
    });
  });

  context('when `back` or `next` button is clicked', () => {
    beforeEach(() => {
      setTestEnvironment();
    });

    it('dispatches `loadTest`', () => {
      const { getByText } = renderTestsContainer();

      fireEvent.click(getByText(/back/));

      expect(dispatch).toBeCalledTimes(1);
    });
  });

  context('when a `submit` button is clicked', () => {
    beforeEach(() => {
      setTestEnvironment(4, null);
    });

    it('dispatches `setTest` with null', () => {
      const { getByText } = renderTestsContainer();

      fireEvent.click(getByText(/submit/));

      expect(dispatch).toBeCalledWith({
        type: 'application/setTest',
        payload: null,
      });
    });
  });
});
