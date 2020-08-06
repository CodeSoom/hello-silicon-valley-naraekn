import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';

import TestsPage from './TestsPage';

jest.mock('react-redux');

test('TestsPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      currentTest: 1,
      selectedAnswer: null,
      savedAnswers: {},
    }));
  });

  render((
    <MemoryRouter>
      <TestsPage />
    </MemoryRouter>
  ));
});
