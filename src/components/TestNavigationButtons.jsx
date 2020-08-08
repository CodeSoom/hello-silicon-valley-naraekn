import React from 'react';

import PageRoutingButton from './PageRoutingButton';

// TODO: Too many props - Reduce the number of props

export default function TestNavigationButtons({
  previousId, nextId,
  handleClickNavigation, handleClickSubmit,
}) {
  return (
    <div>
      { previousId
        && (
          <PageRoutingButton
            title="back"
            handleClick={() => handleClickNavigation(previousId)}
          />
        ) }
      {
        nextId
          ? (
            <PageRoutingButton
              title="next"
              handleClick={() => handleClickNavigation(nextId)}
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
