import React from 'react';

import PageRoutingButton from './PageRoutingButton';

// TODO: Too many props - Reduce the number of props

export default function TestNavigationButtons({
  test: { previousId, nextId },
  handleClickBack, handleClickNext, handleClickSubmit,
}) {
  return (
    <div>
      { previousId
        && (
          <PageRoutingButton
            title="back"
            handleClick={handleClickBack}
          />
        ) }
      {
        nextId
          ? (
            <PageRoutingButton
              title="next"
              handleClick={handleClickNext}
            />
          )
          : (
            <PageRoutingButton
              title="submit"
              handleClick={handleClickSubmit}
            />
          )
      }
    </div>
  );
}
