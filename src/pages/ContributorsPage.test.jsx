import React from 'react';

import { render } from '@testing-library/react';

import ContributorsPage from './ContributorsPage';

jest.mock('../assets/images');

test('ContributorsPage', () => {
  const { getByText } = render((
    <ContributorsPage />
  ));

  expect(getByText(/DEVELOPER/)).not.toBeNull();
  expect(getByText(/DESIGNER/)).not.toBeNull();
  expect(getByText(/CREATOR/)).not.toBeNull();
});
