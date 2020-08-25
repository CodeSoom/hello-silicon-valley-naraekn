import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import HomePage from './HomePage';

const mockPush = jest.fn();

window.scrollTo = jest.fn();

jest.mock('../assets/images');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory() {
    return { push: mockPush };
  },
}));

test('HomePage', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  const { getByText } = render((
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  ));

  expect(getByText(/만든 사람들/)).not.toBeNull();

  fireEvent.click(getByText(/테스트 시작하기/));

  expect(mockPush).toBeCalledWith('/who-are-you');

  expect(window.scrollTo).toBeCalledWith(0, 0);
});
