import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import ResultContainer from './ResultContainer';

import RESULTS from '../../fixtures/results';

test('ResultContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    result: RESULTS[0],
  }));

  const { getByText } = render((
    <MemoryRouter>
      <ResultContainer />
    </MemoryRouter>
  ));

  const { name, description } = RESULTS[0];

  expect(getByText(name)).not.toBeNull();
  expect(getByText(description)).not.toBeNull();
});
