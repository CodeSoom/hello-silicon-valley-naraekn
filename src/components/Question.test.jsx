import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Question from './Question';

import CONTENT from '../../fixtures/content';
import IMAGES from '../../fixtures/images';

jest.mock('../assets/images');

describe('Question', () => {
  const handleClickAnswer = jest.fn();

  const { title, question, options } = CONTENT;

  const renderQuestion = () => render((
    <Question
      content={CONTENT}
      images={IMAGES}
      selectedAnswer={null}
      handleClickAnswer={handleClickAnswer}
    />
  ));

  it('renders title, question and options', () => {
    const { getByText } = renderQuestion();

    expect(getByText(title)).not.toBeNull();

    expect(getByText(question)).not.toBeNull();

    options.forEach((option) => {
      expect(getByText(option.title)).not.toBeNull();
    });
  });

  context('when an answer button is clicked', () => {
    it('occurs handleClick', () => {
      const { getByText } = renderQuestion();

      options.forEach((option) => {
        fireEvent.click(getByText(option.title));

        expect(handleClickAnswer).toBeCalled();
      });
    });
  });
});
