import React from 'react';

import { useHistory } from 'react-router-dom';

import HomeContainer from '../containers/HomeContainer';

export default function HomePage() {
  const history = useHistory();

  function handleClickLink(url) {
    history.push(url);
  }

  return (
    <HomeContainer
      handleClickLink={handleClickLink}
    />
  );
}
