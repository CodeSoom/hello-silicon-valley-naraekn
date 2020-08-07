import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

import question from '../fixtures/question';

jest.mock('react-redux');

const mockPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory() {
    return { push: mockPush };
  },
}));

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

  context('when click `임시제목`', () => {
    it('occurs handleClickLink', () => {
      const { getByText } = renderApp({ path: '/' });

      fireEvent.click(getByText(/임시제목/));

      expect(mockPush).toBeCalledWith('/');
    });
  });
});
