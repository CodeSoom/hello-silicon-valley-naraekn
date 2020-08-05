import React from 'react';

import PageRoutingButton from './PageRoutingButton';

// TODO: first page - hide back button
// TODO: last page - hide next button
// TODO: last page - add submit button

export default function TestNavigationButtons({
  handleClickBack, handleClickNext,
}) {
  return (
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
  );
}
