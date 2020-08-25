import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import WhoAreYouPage from './WhoAreYouPage';

import QUESTION from '../../fixtures/question';
import ANSWERS from '../../fixtures/answers';

const mockPush = jest.fn();

window.scrollTo = jest.fn();

jest.mock('react-redux');
jest.mock('../assets/images');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory() {
    return { push: mockPush };
  },
}));

describe('WhoAreYouPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      test: {
        ...QUESTION,
        nextId: null,
      },
      answers: ANSWERS,
    }));
  });

  const renderWhoAreYouPage = () => render((
    <WhoAreYouPage />
  ));

  context('when the next button is clicked on the last page', () => {
    it('occurs page navigation', () => {
      const { getByText } = renderWhoAreYouPage();

      fireEvent.click(getByText(/SUBMIT/));

      expect(mockPush).toBeCalledWith('/result');

      expect(window.scrollTo).toBeCalledWith(0, 0);
    });
  });
});
