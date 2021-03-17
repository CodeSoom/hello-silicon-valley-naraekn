import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

import { render, fireEvent } from '@testing-library/react';
import configureStore from 'redux-mock-store';

import WhoAreYouContainer from './WhoAreYouContainer';

import { setAnswer } from '../slice';

import CONTENT from '../../fixtures/content';
import ANSWERS from '../../fixtures/answers';

jest.mock('react-redux');
jest.mock('../services/api');
jest.mock('../assets/images');

describe('WhoAreYouContainer', () => {
  const currentId = 2;

  const mockStore = configureStore(getDefaultMiddleware());
  const store = mockStore({});

  const renderWhoAreYouContainer = () => render((
    <WhoAreYouContainer />
  ));

  beforeEach(() => {
    useDispatch.mockImplementation(() => store.dispatch);

    useSelector.mockImplementation((selector) => selector({
      test: {
        type: 'question',
        content: CONTENT,
        id: currentId,
        previousId: 1,
        nextId: 3,
      },
      answers: ANSWERS,
    }));
  });

  context('when the answer button is clicked', () => {
    it('dispatches `setAnswer`', () => {
      const { id, title } = CONTENT.options[0];

      const { getByText } = renderWhoAreYouContainer();

      fireEvent.click(getByText(title));

      const actions = store.getActions();

      expect(actions[0])
        .toEqual(setAnswer({ questionId: currentId, answerId: id }));
    });
  });
});
