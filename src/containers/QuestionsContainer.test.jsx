import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import QuestionsContainer from './QuestionsContainer';

// TODO: Make tests more specific

test('QuestionsContainer', () => {
  const handleClickLink = jest.fn();

  const { getByText } = render((
    <QuestionsContainer
      questionId={1}
      handleClickLink={handleClickLink}
    />
  ));

  fireEvent.click(getByText(/next/));

  expect(handleClickLink).toBeCalled();

  fireEvent.click(getByText(/back/));

  expect(handleClickLink).toBeCalled();
});
