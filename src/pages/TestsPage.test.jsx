import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import TestsPage from './TestsPage';

test('TestsPage', () => {
  const { getByText } = render((
    <MemoryRouter>
      <TestsPage />
    </MemoryRouter>
  ));

  expect(getByText(/테스트 설명/)).not.toBeNull();
});
