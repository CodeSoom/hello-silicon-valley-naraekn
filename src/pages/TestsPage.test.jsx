import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import TestsPage from './TestsPage';

import QUESTION from '../../fixtures/question';

jest.mock('react-redux');
jest.mock('../assets/images');

test('TestsPage', () => {
  useSelector.mockImplementation((selector) => selector({
    test: QUESTION,
    answers: {},
  }));

  render((
    <TestsPage />
  ));
});
