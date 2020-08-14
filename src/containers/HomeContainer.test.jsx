import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import HomeContainer from './HomeContainer';

jest.mock('../assets/images');

test('HomeContainer', () => {
  const dispatch = jest.fn();
  const handleClickLink = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  const { getByText } = render((
    <HomeContainer
      handleClickLink={handleClickLink}
    />
  ));

  fireEvent.click(getByText(/테스트하기/));

  expect(dispatch).toBeCalled();

  expect(handleClickLink).toBeCalledWith('/tests');
});
