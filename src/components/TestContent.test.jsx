import React from 'react';

import { render } from '@testing-library/react';

import TestContent from './TestContent';

import CONTENT from '../../fixtures/content';

describe('TestContent', () => {
  const handleClickAnswer = jest.fn();

  const selectedAnswer = 1;

  function renderTest({ type, content }) {
    return render((
      <TestContent
        type={type}
        content={content}
        selectedAnswer={selectedAnswer}
        handleClickAnswer={handleClickAnswer}
      />
    ));
  }

  beforeEach(() => {
    handleClickAnswer.mockClear();
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

      answers
        .filter((answer) => answer.id !== selectedAnswer)
        .forEach(({ title }) => {
          expect(getByText(title)).not.toBeNull();
        });

      answers
        .filter((answer) => answer.id === selectedAnswer)
        .forEach(({ title }) => {
          expect(getByText(`${title}(V)`)).not.toBeNull();
        });
    });
  });
});
