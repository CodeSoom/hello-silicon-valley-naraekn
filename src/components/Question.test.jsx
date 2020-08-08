import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Question from './Question';

import content from '../../fixtures/content';

describe('Question', () => {
  const handleClickAnswer = jest.fn();

  const { question, answers } = content;

  const renderQuestion = () => render((
    <Question
      content={content}
      handleClickAnswer={handleClickAnswer}
    />
  ));

  it('renders question and answers', () => {
    const { getByText } = renderQuestion();

    expect(getByText(question)).not.toBeNull();

    answers.forEach(({ title }) => {
      expect(getByText(title)).not.toBeNull();
    });
  });

  context('when an answer button is clicked', () => {
    it('occurs handleClick', () => {
      const { getByText } = renderQuestion();

      answers.forEach((answer) => {
        const { title } = answer;

        fireEvent.click(getByText(title));

        expect(handleClickAnswer).toBeCalled();
      });
    });
  });
});
