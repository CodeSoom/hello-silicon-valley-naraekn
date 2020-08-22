import React from 'react';

import { render } from '@testing-library/react';

import Home from './Home';

jest.mock('../assets/images');

test('Home', () => {
  const handleClickTest = jest.fn();
  const handleClickContributors = jest.fn();

  const { getByText } = render((
    <Home
      handleClickTest={handleClickTest}
      handleClickContributors={handleClickContributors}
    />
  ));

  expect(getByText(/당신에게 어울리는/)).not.toBeNull();
  expect(getByText(/테스트 시작하기/)).not.toBeNull();
  expect(getByText(/만든 사람들/)).not.toBeNull();
});
