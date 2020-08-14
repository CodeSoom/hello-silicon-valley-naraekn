import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import HomePage from './HomePage';

const mockPush = jest.fn();

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

  expect(getByText(/About/)).not.toBeNull();

  fireEvent.click(getByText(/테스트하기/));

  expect(mockPush).toBeCalledWith('/tests');
});
