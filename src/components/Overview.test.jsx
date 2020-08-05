import React from 'react';

import { render } from '@testing-library/react';

import Overview from './Overview';

test('Overview', () => {
  const content = {
    title: 'day',
    explanation: '설명설명',
  };

  const { getByText } = render((
    <Overview
      content={content}
    />
  ));

  expect(getByText(content.title)).not.toBeNull();

  expect(getByText(content.explanation)).not.toBeNull();
});
