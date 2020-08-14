import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import WhoAreYouPage from './WhoAreYouPage';

import QUESTION from '../../fixtures/question';
import IMAGES from '../../fixtures/images';

jest.mock('react-redux');
jest.mock('../assets/images');

test('WhoAreYouPage', () => {
  useSelector.mockImplementation((selector) => selector({
    test: QUESTION,
    testsImage: IMAGES,
    answers: {},
  }));

  render((
    <WhoAreYouPage />
  ));
});
