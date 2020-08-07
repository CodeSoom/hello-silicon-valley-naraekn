import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

import question from '../fixtures/question';

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
      currentTest: question,
      selectedAnswer: null,
      savedAnswers: {},
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
    it('renders TestsPage', () => {
      const { container } = renderApp({ path: '/about' });

      expect(container).toHaveTextContent(/About/);
    });
  });
});
