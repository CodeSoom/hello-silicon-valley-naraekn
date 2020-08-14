import React from 'react';

import { render } from '@testing-library/react';

import Overview from './Overview';

jest.mock('../assets/images');

// TODO: Modify test codes as the components structure has been changed

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
