import React from 'react';

import Overview from './Overview';
import Question from './Question';
import PageRoutingButton from './PageRoutingButton';

// TODO: first page - hide back button
// TODO: last page - add submit button

export default function Test({
  type, content,
  handleClickAnswer, handleClickRouting,
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
          handleClick={handleClickRouting}
        />
        <PageRoutingButton
          title="next"
          handleClick={handleClickRouting}
        />
      </div>
    </>
  );
}
