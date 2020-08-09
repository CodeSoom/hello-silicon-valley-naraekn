import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

import { render, fireEvent } from '@testing-library/react';
import configureStore from 'redux-mock-store';

import TestsContainer from './TestsContainer';

import { setAnswer, setTest } from '../slice';

import CONTENT from '../../fixtures/content';
import ANSWERS from '../../fixtures/answers';

jest.mock('react-redux');
jest.mock('../services/api');

describe('TestsContainer', () => {
  const currentId = 1;

  const handleClickLink = jest.fn();

  const mockStore = configureStore(getDefaultMiddleware());
  const store = mockStore({});

  const renderTestsContainer = () => render((
    <TestsContainer
      handleClickLink={handleClickLink}
    />
  ));

  beforeEach(() => {
    jest.clearAllMocks();

    store.clearActions();
  });

  beforeEach(() => {
    useDispatch.mockImplementation(() => store.dispatch);

    useSelector.mockImplementation((selector) => selector({
      test: {
        type: 'question',
        content: CONTENT,
        id: currentId,
        previousId: given.previousId,
        nextId: given.nextId,
      },
      answers: ANSWERS,
    }));
  });

  context('when not last page', () => {
    given('previousId', () => 1);
    given('nextId', () => 3);

    describe('click answer button', () => {
      const { id, title } = CONTENT.answers[0];

      it('dispatches `setAnswer`', () => {
        const { getByText } = renderTestsContainer();

        fireEvent.click(getByText(title));

        const actions = store.getActions();

        expect(actions[0])
          .toEqual(setAnswer({ questionId: currentId, answerId: id }));
      });
    });

    describe('click back button', () => {
      it('dispatches `loadTest` with previous id', () => {
        const { getByText } = renderTestsContainer();

        fireEvent.click(getByText(/back/));

        const actions = store.getActions();

        expect(actions[0]).toEqual(setTest({ id: 1 }));
      });
    });

    describe('click next button', () => {
      it('dispatches `loadTest` with next id', () => {
        const { getByText } = renderTestsContainer();

        fireEvent.click(getByText(/next/));

        const actions = store.getActions();

        expect(actions[0]).toEqual(setTest({ id: 3 }));
      });
    });
  });

  context('when last page', () => {
    given('previousId', () => 4);
    given('nextId', () => null);

    describe('click submit button', () => {
      it('dispatches `setTest` and `loadResult`', () => {
        const { getByText } = renderTestsContainer();

        fireEvent.click(getByText(/submit/));

        const actions = store.getActions();

        expect(actions[0]).toEqual(setTest(null));
      });
    });
  });
});
