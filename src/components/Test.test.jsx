import React from 'react';

import { render } from '@testing-library/react';

import Test from './Test';

import CONTENT from '../../fixtures/content';

describe('Test', () => {
  const handleClickAnswer = jest.fn();
  const handleClickRouting = jest.fn();

  function renderTest({ type, content }) {
    return render((
      <Test
        type={type}
        content={content}
        handleClickAnswer={handleClickAnswer}
        handleClickRouting={handleClickRouting}
      />
    ));
  }

  beforeEach(() => {
    handleClickAnswer.mockClear();
    handleClickRouting.mockClear();
  });

  context('when type is `overview`', () => {
    it('renders overview', () => {
      const type = 'overview';

      // TODO: Refactor fixture
      const content = { title: 'Day', explanation: '설명설명' };

      const { getByText } = renderTest({ type, content });

      expect(getByText(content.title)).not.toBeNull();
      expect(getByText(content.explanation)).not.toBeNull();
    });
  });

  context('when type is `question`', () => {
    it('renders overview', () => {
      const type = 'question';
      const { question, answers } = CONTENT;

      const { getByText } = renderTest({ type, content: CONTENT });

      expect(getByText(question)).not.toBeNull();

      answers.forEach((answer) => {
        expect(getByText(answer.title)).not.toBeNull();
      });
    });
  });
});
