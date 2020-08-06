import React from 'react';

import { render } from '@testing-library/react';

import TestContent from './TestContent';

import CONTENT from '../../fixtures/content';

describe('TestContent', () => {
  const handleClickAnswer = jest.fn();

  function renderTestContent({ type, content, selectedAnswer }) {
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
      const content = { title: 'Day', explanation: '설명설명' };

      const { getByText } = renderTestContent({
        type,
        content,
        selectedAnswer: null,
      });

      expect(getByText(content.title)).not.toBeNull();
      expect(getByText(content.explanation)).not.toBeNull();
    });
  });

  context('when type is `question` without a selected answer', () => {
    it('renders question', () => {
      const type = 'question';
      const { question, answers } = CONTENT;

      const { getByText } = renderTestContent({
        type,
        content: CONTENT,
        selectedAnswer: null,
      });

      expect(getByText(question)).not.toBeNull();

      answers
        .forEach(({ title }) => {
          expect(getByText(title)).not.toBeNull();
        });
    });
  });

  context('when type is `question`', () => {
    it('renders question with `v` sign', () => {
      const type = 'question';
      const { question, answers } = CONTENT;
      const selectedAnswer = 1;

      const { getByText } = renderTestContent({
        type,
        content: CONTENT,
        selectedAnswer,
      });

      expect(getByText(question)).not.toBeNull();

      answers
        .filter(({ id }) => id === selectedAnswer)
        .forEach(({ title }) => {
          expect(getByText(`${title}(V)`)).not.toBeNull();
        });
    });
  });
});
