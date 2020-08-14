import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import QuestionWithImages from './QuestionWithImages';

import CONTENT from '../../fixtures/content';
import IMAGES from '../../fixtures/images';

jest.mock('../assets/images');

describe('QuestionWithImages', () => {
  const handleClickAnswer = jest.fn();

  const {
    title, question, options,
  } = CONTENT;

  const renderQuestionWithImages = () => render((
    <QuestionWithImages
      content={CONTENT}
      images={IMAGES}
      handleClickAnswer={handleClickAnswer}
    />
  ));

  it('renders title, question, and options', () => {
    const { getByText } = renderQuestionWithImages();

    expect(getByText(title)).not.toBeNull();

    expect(getByText(question)).not.toBeNull();

    options.forEach((option) => {
      expect(getByText(option.title)).not.toBeNull();
    });
  });

  context('when an answer button is clicked', () => {
    it('occurs handleClick', () => {
      const { getByText } = renderQuestionWithImages();

      options.forEach((option) => {
        fireEvent.click(getByText(option.title));

        expect(handleClickAnswer).toBeCalled();
      });
    });
  });
});
