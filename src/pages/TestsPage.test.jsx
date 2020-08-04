import React from 'react';

import { render } from '@testing-library/react';

import TestsPage from './TestsPage';

test('TestsPage', () => {
  const { getByText } = render((
    <TestsPage />
  ));

  expect(getByText(/테스트페이지/)).not.toBeNull();
});
