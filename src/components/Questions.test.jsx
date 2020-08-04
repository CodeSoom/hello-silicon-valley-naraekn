import React from 'react';

import { render } from '@testing-library/react';

import Questions from './Questions';

test('Questions', () => {
  const { getByText } = render((
    <Questions
      questionId={1}
      question="질문입니다"
    />
  ));

  expect(getByText(/1/)).not.toBeNull();
  expect(getByText(/질문입니다/)).not.toBeNull();
});
