import React from 'react';

import Overview from './Overview';
import Question from './Question';
import PageRoutingButton from './PageRoutingButton';

// TODO: first page - hide back button
// TODO: last page - add submit button
// TODO: Too many props - Reduce a number of props

export default function Test({
  type, content,
  handleClickAnswer, handleClickBack, handleClickNext,
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
                content={content}
                handleClick={handleClickAnswer}
              />
            )
        }
      </div>
      <div>
        <PageRoutingButton
          title="back"
          handleClick={handleClickBack}
        />
        <PageRoutingButton
          title="next"
          handleClick={handleClickNext}
        />
      </div>
    </>
  );
}
