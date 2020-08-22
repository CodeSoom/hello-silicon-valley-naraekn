import React from 'react';

import QuestionText from './who-are-you/QuestionText';
import AnswerButtons from './who-are-you/AnswerButtons';

export default function Question({
  content, images, selectedAnswer, handleClickAnswer,
}) {
  const { title, question, options } = content;

  return (
    <>
      <QuestionText
        title={title}
        question={question}
      />
      <AnswerButtons
        options={options}
        profiles={images}
        selectedAnswer={selectedAnswer}
        onClick={handleClickAnswer}
      />
    </>
  );
}
