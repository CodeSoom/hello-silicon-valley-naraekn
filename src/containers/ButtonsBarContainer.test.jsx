import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

import { render, fireEvent } from '@testing-library/react';
import configureStore from 'redux-mock-store';

import ButtonsBarContainer from './ButtonsBarContainer';

import { setTest, initializeAnswers } from '../slice';

import CONTENT from '../../fixtures/content';
import ANSWERS from '../../fixtures/answers';

jest.mock('react-redux');
jest.mock('../services/api');
jest.mock('../assets/images');

describe('ButtonsBarContainer', () => {
  const currentId = 2;

  const handleClickResult = jest.fn();

  window.scrollTo = jest.fn();

  const mockStore = configureStore(getDefaultMiddleware());
  const store = mockStore({});

  const renderButtonsBarContainer = () => render((
    <ButtonsBarContainer
      handleClickResult={handleClickResult}
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

  context('when not on the last page', () => {
    given('previousId', () => 1);
    given('nextId', () => 3);

    describe('the clicked back button', () => {
      it('dispatches `loadTest` with previous id', () => {
        const { getByText } = renderButtonsBarContainer();

        fireEvent.click(getByText(/BACK/));

        const actions = store.getActions();

        expect(actions[0]).toEqual(setTest({ id: 1 }));
      });
    });

    describe('the clicked next button', () => {
      it('dispatches `loadTest` with next id', () => {
        const { getByText } = renderButtonsBarContainer();

        fireEvent.click(getByText(/NEXT/));

        const actions = store.getActions();

        expect(actions[0]).toEqual(setTest({ id: 3 }));
      });
    });
  });

  context('when on the last page', () => {
    given('previousId', () => 4);
    given('nextId', () => null);

    describe('the clicked next button', () => {
      it('dispatches `setTest`, `initializeAnswers`, `loadResult`', () => {
        const { getByText } = renderButtonsBarContainer();

        fireEvent.click(getByText(/SUBMIT/));

        const actions = store.getActions();

        expect(actions[0]).toEqual(setTest(null));
        expect(actions[1]).toEqual(initializeAnswers());
      });
    });
  });
});
