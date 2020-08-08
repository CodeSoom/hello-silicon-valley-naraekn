import React from 'react';

import { render } from '@testing-library/react';

import TestNavigationButtons from './TestNavigationButtons';

describe('TestNavigationButtons', () => {
  const handleClickNext = jest.fn();
  const handleClickBack = jest.fn();
  const handleClickSubmit = jest.fn();

  function renderTestNavigationButtons({ previousId, nextId }) {
    return render((
      <TestNavigationButtons
        previousId={previousId}
        nextId={nextId}
        handleClickBack={handleClickBack}
        handleClickNext={handleClickNext}
        handleClickSubmit={handleClickSubmit}
      />
    ));
  }

  context('when `previousId` does not exist', () => {
    it('does not render a `back` button', () => {
      const previousId = null;
      const nextId = 2;

      const { queryByText } = renderTestNavigationButtons({
        previousId, nextId,
      });

      expect(queryByText(/back/)).toBeNull();
    });
  });

  context('when `previousId` exists', () => {
    it('renders a `back` button', () => {
      const previousId = 1;
      const nextId = 3;

      const { queryByText } = renderTestNavigationButtons({
        previousId, nextId,
      });

      expect(queryByText(/back/)).not.toBeNull();
    });
  });

  context('when `nextId` exists', () => {
    it('renders a `next` button', () => {
      const previousId = 3;
      const nextId = 5;

      const { queryByText } = renderTestNavigationButtons({
        previousId, nextId,
      });

      expect(queryByText(/next/)).not.toBeNull();
    });
  });

  context('when `nextId` does not exist', () => {
    it('renders a `submit` button', () => {
      const previousId = 4;
      const nextId = null;

      const { queryByText } = renderTestNavigationButtons({
        previousId, nextId,
      });

      expect(queryByText(/submit/)).not.toBeNull();
    });
  });
});
