import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import PageRoutingButtons from './PageRoutingButtons';

describe('PageRoutingButtons', () => {
  const handleClick = jest.fn();

  const renderPageRoutingButtons = (id) => render((
    <PageRoutingButtons
      questionId={id}
      handleClick={handleClick}
    />
  ));

  beforeEach(() => {
    handleClick.mockClear();
  });

  context('when back button is clicked', () => {
    it('occurs handleClick with `id - 1`', () => {
      const { getByText } = renderPageRoutingButtons(2);

      fireEvent.click(getByText(/back/));

      expect(handleClick).toBeCalledWith(1);
    });
  });

  context('when next button is clicked', () => {
    it('occurs handleClick with `id + 1`', () => {
      const { getByText } = renderPageRoutingButtons(1);

      fireEvent.click(getByText(/next/));

      expect(handleClick).toBeCalledWith(2);
    });
  });
});
