import React from 'react';

import { render } from '@testing-library/react';

import Result from './Result';

jest.mock('../assets/images');

test('Result', () => {
  const { getByText } = render((
    <Result />
  ));

  expect(getByText(/결과/)).not.toBeNull();
});
