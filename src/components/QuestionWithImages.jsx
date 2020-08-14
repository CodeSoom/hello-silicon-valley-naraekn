import React from 'react';

import ImageSlider from './who-are-you/ImageSlider';
import QuestionText from './who-are-you/QuestionText';
import AnswerButtons from './who-are-you/AnswerButtons';

export default function QuestionWithImages({
  content, images, handleClickAnswer,
}) {
  const { title, question, options } = content;
  const { feeds, profiles } = images;

  return (
    <>
      <ImageSlider
        feeds={feeds}
      />
      <QuestionText
        title={title}
        question={question}
      />
      <AnswerButtons
        options={options}
        profiles={profiles}
        handleClick={handleClickAnswer}
      />
    </>
  );
}
