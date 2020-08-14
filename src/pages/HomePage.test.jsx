import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import HomePage from './HomePage';

jest.mock('../assets/images');

test('HomePage', () => {
  const { getByText } = render((
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  ));

  expect(getByText(/테스트하기/)).not.toBeNull();

  expect(getByText(/About/)).not.toBeNull();
});
