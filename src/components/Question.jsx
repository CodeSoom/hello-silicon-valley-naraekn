import React from 'react';

import QuestionText from './who-are-you/QuestionText';
import AnswerButtons from './who-are-you/AnswerButtons';

export default function Question({
  content, images, selectedAnswer, handleClickAnswer,
}) {
  const { title, question, options } = content;

  const { profiles } = images;

  return (
    <>
      <QuestionText
        title={title}
        question={question}
      />
      <AnswerButtons
        options={options}
        profiles={profiles}
        selectedAnswer={selectedAnswer}
        handleClick={handleClickAnswer}
      />
    </>
  );
}
