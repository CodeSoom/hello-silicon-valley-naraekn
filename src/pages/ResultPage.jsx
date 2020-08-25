import React from 'react';

import { useHistory } from 'react-router-dom';

import { scrollToTop } from '../utils';

import ResultContainer from '../containers/ResultContainer';

export default function ResultPage() {
  const history = useHistory();

  function handleClickLink(url) {
    history.push(url);

    scrollToTop();
  }

  return (
    <ResultContainer
      handleClickLink={handleClickLink}
    />
  );
}
