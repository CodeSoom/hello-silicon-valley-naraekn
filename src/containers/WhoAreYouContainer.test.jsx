import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

import { render, fireEvent } from '@testing-library/react';
import configureStore from 'redux-mock-store';

import WhoAreYouContainer from './WhoAreYouContainer';

import { setAnswer, setTest } from '../slice';

import CONTENT from '../../fixtures/content';
import ANSWERS from '../../fixtures/answers';
import IMAGES from '../../fixtures/images';

jest.mock('react-redux');
jest.mock('../services/api');
jest.mock('../assets/images');

describe('WhoAreYouContainer', () => {
  const currentId = 2;

  const handleClickLink = jest.fn();

  const mockStore = configureStore(getDefaultMiddleware());
  const store = mockStore({});

  const renderWhoAreYouContainer = () => render((
    <WhoAreYouContainer
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
      testImages: IMAGES,
      answers: ANSWERS,
    }));
  });

  context('when not on the last page', () => {
    given('previousId', () => 1);
    given('nextId', () => 3);

    describe('the clicked answer button ', () => {
      const { id, title } = CONTENT.options[0];

      it('dispatches `setAnswer`', () => {
        const { getByText } = renderWhoAreYouContainer();

        fireEvent.click(getByText(title));

        const actions = store.getActions();

        expect(actions[0])
          .toEqual(setAnswer({ questionId: currentId, answerId: id }));
      });
    });

    describe('the clicked back button', () => {
      it('dispatches `loadTest` with previous id', () => {
        const { getByText } = renderWhoAreYouContainer();

        fireEvent.click(getByText(/BACK/));

        const actions = store.getActions();

        expect(actions[0]).toEqual(setTest({ id: 1 }));
      });
    });

    describe('the clicked next button', () => {
      it('dispatches `loadTest` with next id', () => {
        const { getByText } = renderWhoAreYouContainer();

        fireEvent.click(getByText(/NEXT/));

        const actions = store.getActions();

        expect(actions[0]).toEqual(setTest({ id: 3 }));
      });
    });
  });

  context('when not on the last page', () => {
    given('previousId', () => 4);
    given('nextId', () => null);

    describe('the clicked next button', () => {
      it('dispatches `setTest` and `loadResult`', () => {
        const { getByText } = renderWhoAreYouContainer();

        fireEvent.click(getByText(/NEXT/));

        const actions = store.getActions();

        expect(actions[0]).toEqual(setTest(null));
      });
    });
  });
});
