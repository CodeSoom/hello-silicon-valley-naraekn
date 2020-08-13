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
      result: RESULTS[0],
    }));
  });

  context('with path /', () => {
    it('renders HomePage', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent(/테스트하기/);
      expect(container).toHaveTextContent(/About/);
    });
  });

  context('with path /tests', () => {
    it('renders TestsPage', () => {
      const { container } = renderApp({ path: '/tests' });

      expect(container).toHaveTextContent(/테스트/);
    });
  });

  context('with path /about', () => {
    it('renders AboutPage', () => {
      const { container } = renderApp({ path: '/about' });

      expect(container).toHaveTextContent(/About/);
    });
  });

  context('with path /result', () => {
    it('renders ResultPage', () => {
      const { container } = renderApp({ path: '/result' });

      expect(container).toHaveTextContent(/결과/);
    });
  });
});
