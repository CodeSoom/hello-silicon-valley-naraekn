import React from 'react';

import { render } from '@testing-library/react';

import NotFoundPage from './NotFoundPage';

test('NotFoundPage', () => {
  const { getByText } = render((
    <NotFoundPage />
  ));

  expect(getByText(/404/)).not.toBeNull();
});
