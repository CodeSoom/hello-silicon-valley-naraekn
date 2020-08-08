import React from 'react';

import { render } from '@testing-library/react';

import TestContent from './TestContent';

import QUESTION from '../../fixtures/question';
import OVERVIEW from '../../fixtures/overview';

describe('TestContent', () => {
  const handleClickAnswer = jest.fn();

  function renderTestContent({
    test: { type, content }, selectedAnswer,
  }) {
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
      const { getByText } = renderTestContent({
        test: OVERVIEW,
        selectedAnswer: null,
      });

      const { content: { title, explanation } } = OVERVIEW;

      expect(getByText(title)).not.toBeNull();
      expect(getByText(explanation)).not.toBeNull();
    });
  });

  context('when type is `question` without a selected answer', () => {
    it('renders question', () => {
      const { getByText } = renderTestContent({
        test: QUESTION,
        selectedAnswer: null,
      });

      const { content: { question, answers } } = QUESTION;

      expect(getByText(question)).not.toBeNull();

      answers
        .forEach(({ title }) => {
          expect(getByText(title)).not.toBeNull();
        });
    });
  });

  context('when type is `question with a selected answer`', () => {
    it('renders question with `v` sign', () => {
      const selectedAnswer = 1;

      const { getByText } = renderTestContent({
        test: QUESTION,
        selectedAnswer,
      });

      const { content: { question, answers } } = QUESTION;

      expect(getByText(question)).not.toBeNull();

      answers
        .filter(({ id }) => id === selectedAnswer)
        .forEach(({ title }) => {
          expect(getByText(`${title}(V)`)).not.toBeNull();
        });
    });
  });
});
