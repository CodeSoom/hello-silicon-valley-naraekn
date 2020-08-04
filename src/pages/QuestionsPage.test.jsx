import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import QuestionsPage from './QuestionsPage';

const mockPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory() {
    return { push: mockPush };
  },
}));

describe('QuestionsPage', () => {
  function renderQuestionsPage({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <QuestionsPage />
      </MemoryRouter>
    ));
  }

  context('when click `next` or `back` button', () => {
    it('occurs handleClickLink', () => {
      const { getByText } = renderQuestionsPage({ path: '/tests/1' });

      fireEvent.click(getByText(/next/));

      expect(mockPush).toBeCalled();
    });
  });
});
