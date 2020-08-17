import React from 'react';

import { render, fireEvent } from '@testing-library/react';

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

  context('when type is `question-with-images`', () => {
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

  describe('A next button in BottomBar', () => {
    context('when the answer is selected on the last page', () => {
      given('test', () => ({
        ...QUESTION,
        nextId: null,
      }));

      it('occurs `handleClickSubmit`', () => {
        const { getByText } = renderWhoAreYou();

        fireEvent.click(getByText(/NEXT/));

        expect(handleClickSubmit).toBeCalled();
      });
    });

    context('when the answer is selected not on the last page', () => {
      given('test', () => QUESTION);

      it('occurs `handleClickNavigation`', () => {
        const { getByText } = renderWhoAreYou();

        fireEvent.click(getByText(/NEXT/));

        expect(handleClickNavigation).toBeCalled();
      });
    });
  });
});
