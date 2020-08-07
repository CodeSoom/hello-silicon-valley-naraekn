import React from 'react';

import { render } from '@testing-library/react';

import TestContent from './TestContent';

import QUESTION from '../../fixtures/question';
import OVERVIEW from '../../fixtures/overview';

describe('TestContent', () => {
  const handleClickAnswer = jest.fn();

  function renderTestContent({ test, selectedAnswer }) {
    return render((
      <TestContent
        test={test}
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
      const { content: { title, explanation } } = OVERVIEW;

      const { getByText } = renderTestContent({
        test: OVERVIEW,
        selectedAnswer: null,
      });

      expect(getByText(title)).not.toBeNull();
      expect(getByText(explanation)).not.toBeNull();
    });
  });

  context('when type is `question` without a selected answer', () => {
    it('renders question', () => {
      const { content: { question, answers } } = QUESTION;

      const { getByText } = renderTestContent({
        test: QUESTION,
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
      const { content: { question, answers } } = QUESTION;
      const selectedAnswer = 1;

      const { getByText } = renderTestContent({
        test: QUESTION,
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
