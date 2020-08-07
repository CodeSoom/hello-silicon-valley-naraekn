import React from 'react';

import Overview from './Overview';
import Question from './Question';

export default function TestContent({
  test: { type, content },
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
                selectedAnswer={selectedAnswer}
                content={content}
                handleClick={handleClickAnswer}
              />
            )
        }
      </div>
    </>
  );
}
