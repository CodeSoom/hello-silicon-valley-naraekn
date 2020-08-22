import React from 'react';

import { render } from '@testing-library/react';

import WhoAreYou from './WhoAreYou';

import QUESTION from '../../fixtures/question';
import OVERVIEW from '../../fixtures/overview';
import IMAGES from '../../fixtures/images';

jest.mock('../assets/images');

describe('WhoAreYou', () => {
  const handleClickOption = jest.fn();
  const handleClickNavigation = jest.fn();
  const handleClickSubmit = jest.fn();

  const renderWhoAreYou = () => render((
    <WhoAreYou
      test={given.test}
      images={IMAGES}
      selectedAnswer={1}
      handleClickAnswer={handleClickOption}
      handleClickNavigation={handleClickNavigation}
      handleClickSubmit={handleClickSubmit}
    />
  ));

  beforeEach(() => {
    handleClickOption.mockClear();
  });

  context('when type is `overview`', () => {
    given('test', () => OVERVIEW);

    it('renders overview', () => {
      const { getByText } = renderWhoAreYou();

      const { content: { title, explanation } } = OVERVIEW;

      expect(getByText(title)).not.toBeNull();
      expect(getByText(explanation)).not.toBeNull();
    });
  });

  context('when type is `question`', () => {
    given('test', () => QUESTION);

    it('renders question', () => {
      const { getByText } = renderWhoAreYou();

      const { content: { title, question, options } } = QUESTION;

      expect(getByText(title)).not.toBeNull();

      expect(getByText(question)).not.toBeNull();

      options
        .forEach((option) => {
          expect(getByText(option.title)).not.toBeNull();
        });
    });
  });
});
