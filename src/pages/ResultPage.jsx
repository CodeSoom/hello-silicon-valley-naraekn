import React from 'react';

import { useHistory } from 'react-router-dom';

import ResultContainer from '../containers/ResultContainer';

export default function ResultPage() {
  const history = useHistory();

  function handleClickLink(url) {
    history.push(url);
  }

  return (
    <ResultContainer
      handleClickLink={handleClickLink}
    />
  );
}
