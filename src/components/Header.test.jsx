import React from 'react';

import { render } from '@testing-library/react';

import Header from './Header';

test('Header', () => {
  const { getByText } = render((
    <Header />
  ));

  expect(getByText(/임시제목/)).not.toBeNull();
  expect(getByText(/About/)).not.toBeNull();
});
