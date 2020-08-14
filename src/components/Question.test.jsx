import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Question from './Question';

import content from '../../fixtures/content';

jest.mock('../assets/images');

// TODO: Modify test codes as the components structure has been changed

describe('Question', () => {
  const handleClickAnswer = jest.fn();

  const { question, options } = content;

  const renderQuestion = () => render((
    <Question
      content={content}
      handleClickAnswer={handleClickAnswer}
    />
  ));

  it('renders question and options', () => {
    const { getByText } = renderQuestion();

    expect(getByText(question)).not.toBeNull();

    options.forEach(({ title }) => {
      expect(getByText(title)).not.toBeNull();
    });
  });

  context('when an answer button is clicked', () => {
    it('occurs handleClick', () => {
      const { getByText } = renderQuestion();

      options.forEach((answer) => {
        const { title } = answer;

        fireEvent.click(getByText(title));

        expect(handleClickAnswer).toBeCalled();
      });
    });
  });
});
