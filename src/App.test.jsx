import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

import QUESTION from '../fixtures/question';
import RESULTS from '../fixtures/results';

jest.mock('./assets/images');

describe('App', () => {
  const dispatch = jest.fn();

  function renderApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      test: QUESTION,
      answers: {},
      result: {
        first: RESULTS[0],
        second: RESULTS[1],
        last: RESULTS[2],
      },
    }));
  });

  context('with path /', () => {
    it('renders HomePage', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent(/테스트 시작하기/);
      expect(container).toHaveTextContent(/만든 사람들/);
    });
  });

  context('with path /contributors', () => {
    it('renders Contributors', () => {
      const { container } = renderApp({ path: '/contributors' });

      expect(container).toHaveTextContent(/DEVELOPER/);
      expect(container).toHaveTextContent(/DESIGNER/);
      expect(container).toHaveTextContent(/CREATOR/);
    });
  });

  context('with path /result', () => {
    it('renders ResultPage', () => {
      const { container } = renderApp({ path: '/result' });

      expect(container).toHaveTextContent(/What_is_your_company?/);
    });
  });
});
