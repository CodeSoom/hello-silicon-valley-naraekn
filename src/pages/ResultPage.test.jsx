import React from 'react';

import { render } from '@testing-library/react';

import ResultPage from './ResultPage';

test('ResultPage', () => {
  const { getByText } = render((<ResultPage />));

  expect(getByText(/결과/)).not.toBeNull();
});
