import React from 'react';

import Overview from './Overview';
import Question from './Question';

export default function TestContent({
  id, type, content,
  selectedAnswer, handleClickAnswer,
}) {
  return (
    <>
      <div>
        {
          type === 'overview'
            ? (
              <Overview
                content={content}
              />
            )
            : (
              <Question
                id={id}
                selectedAnswer={selectedAnswer}
                content={content}
                handleClickAnswer={handleClickAnswer}
              />
            )
        }
      </div>
    </>
  );
}
