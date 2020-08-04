import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

const mockPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory() {
    return { push: mockPush };
  },
}));

describe('App', () => {
  function renderApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  context('with path /', () => {
    it('renders HomePage', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent(/테스트하기/);
    });
  });

  context('with path /tests', () => {
    it('renders TestsPage', () => {
      const { container } = renderApp({ path: '/tests' });

      expect(container).toHaveTextContent(/테스트페이지/);
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
