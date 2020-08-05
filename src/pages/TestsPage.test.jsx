import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import TestsPage from './TestsPage';

test('TestsPage', () => {
  render((
    <MemoryRouter>
      <TestsPage />
    </MemoryRouter>
  ));
});
