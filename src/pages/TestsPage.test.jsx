import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';

import TestsPage from './TestsPage';

jest.mock('react-redux');

test('TestsPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      currentTest: 0,
    }));
  });

  render((
    <MemoryRouter>
      <TestsPage />
    </MemoryRouter>
  ));
});
