import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import NavigationButtons from './NavigationButtons';

import QUESTION from '../../fixtures/question';

jest.mock('../assets/images');

describe('NavigationButtons', () => {
  const handleClickBack = jest.fn();
  const handleClickNext = jest.fn();
  const handleClickSubmit = jest.fn();

  const renderNavigationButtons = () => render((
    <NavigationButtons
      test={given.test}
      selectedAnswer={1}
      handleClickBack={handleClickBack}
      handleClickNext={handleClickNext}
      handleClickSubmit={handleClickSubmit}
    />
  ));

  describe('BackButton', () => {
    context('when on the first page', () => {
      given('test', () => ({
        ...QUESTION,
        previousId: null,
      }));

      it('does not render `back button`', () => {
        const { queryByText } = renderNavigationButtons();

        expect(queryByText(/BACK/)).toBeNull();
      });
    });

    context('when the back button is clicked', () => {
      given('test', () => ({
        ...QUESTION,
        previousId: 1,
      }));

      it('occurs `handleClickBack`', () => {
        const { getByText } = renderNavigationButtons();

        fireEvent.click(getByText(/BACK/));

        expect(handleClickBack).toBeCalled();
      });
    });
  });

  describe('NextButton', () => {
    context('when on the last page', () => {
      given('test', () => ({
        ...QUESTION,
        nextId: null,
      }));

      it('does not render `next button`', () => {
        const { queryByText } = renderNavigationButtons();

        expect(queryByText(/NEXT/)).toBeNull();
      });
    });

    context('when the answer button is clicked', () => {
      given('test', () => QUESTION);

      it('occurs `handleClickNext`', () => {
        const { getByText } = renderNavigationButtons();

        fireEvent.click(getByText(/NEXT/));

        expect(handleClickNext).toBeCalled();
      });
    });
  });

  describe('SubmitButton', () => {
    context('when not on the last page', () => {
      given('test', () => ({
        ...QUESTION,
        nextId: 4,
      }));

      it('does not render `submit button`', () => {
        const { queryByText } = renderNavigationButtons();

        expect(queryByText(/SUBMIT/)).toBeNull();
      });
    });

    context('when the submit button is clicked', () => {
      given('test', () => ({
        ...QUESTION,
        nextId: null,
      }));

      it('occurs `handleClickNext`', () => {
        const { getByText } = renderNavigationButtons();

        fireEvent.click(getByText(/SUBMIT/));

        expect(handleClickSubmit).toBeCalled();
      });
    });
  });
});
