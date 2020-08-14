import React from 'react';

import { render } from '@testing-library/react';

import Overview from './Overview';

import OVERVIEW from '../../fixtures/overview';
import IMAGES from '../../fixtures/images';

jest.mock('../assets/images');

test('Overview', () => {
  const { content } = OVERVIEW;

  const { getByText } = render((
    <Overview
      content={content}
      images={IMAGES}
    />
  ));

  expect(getByText(content.title)).not.toBeNull();

  expect(getByText(content.explanation)).not.toBeNull();

  content.tips.forEach((tip) => {
    expect(getByText(tip)).not.toBeNull();
  });
});
