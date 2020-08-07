import React from 'react';

import { useHistory } from 'react-router-dom';

import TestContainer from '../containers/TestsContainer';

export default function TestsPage() {
  const history = useHistory();

  function handleClickLink(url) {
    history.push(url);
  }

  return ((
    <>
      <h1>테스트</h1>
      <TestContainer
        handleClickLink={handleClickLink}
      />
    </>
  ));
}
