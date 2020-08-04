import React from 'react';

import { render } from '@testing-library/react';

import Answers from './Answers';

import ANSWERS from '../../fixtures/answers';

test('Answers', () => {
  const { getByText } = render((
    <Answers
      answers={ANSWERS}
    />
  ));

  ANSWERS.forEach((answer) => {
    expect(getByText(answer.content)).not.toBeNull();
  });
});
