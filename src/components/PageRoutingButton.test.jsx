import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import PageRoutingButton from './PageRoutingButton';

test('PageRoutingButton', () => {
  const handleClick = jest.fn();

  const { getByText } = render((
    <PageRoutingButton
      title="next"
      handleClick={handleClick}
    />
  ));

  fireEvent.click(getByText(/next/));

  expect(handleClick).toBeCalled();
});
