import React from 'react';

import { useHistory } from 'react-router-dom';

import { scrollToTop } from '../utils';

import HomeContainer from '../containers/HomeContainer';

export default function HomePage() {
  const history = useHistory();

  function handleClickLink(url) {
    history.push(url);

    scrollToTop();
  }

  return (
    <HomeContainer
      handleClickLink={handleClickLink}
    />
  );
}
