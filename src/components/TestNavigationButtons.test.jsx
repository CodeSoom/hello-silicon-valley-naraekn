import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import TestNavigationButtons from './TestNavigationButtons';

test('TestNavigationButtons', () => {
  const handleClickNext = jest.fn();
  const handleClickBack = jest.fn();

  const { getByText } = render((
    <TestNavigationButtons
      handleClickBack={handleClickBack}
      handleClickNext={handleClickNext}
    />
  ));

  fireEvent.click(getByText(/next/));

  expect(handleClickNext).toBeCalled();

  fireEvent.click(getByText(/back/));

  expect(handleClickBack).toBeCalled();
});
