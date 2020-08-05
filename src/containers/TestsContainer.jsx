import React from 'react';

import Test from '../components/Test';

import questionnaire from '../data/questionnaire';

export default function TestsContainer() {
  const currentPage = 0; // TODO: useSelector..

  const { type, content } = questionnaire[currentPage];

  function handleClickAnswer() {
    // TODO: dispatch ..
  }

  function handleClickRouting() {
    // TODO: dispatch ..
  }

  return (
    <>
      <Test
        type={type}
        content={content}
        handleClickAnswer={handleClickAnswer}
        handleClickRouting={handleClickRouting}
      />
    </>
  );
}
