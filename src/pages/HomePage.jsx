import React from 'react';

import { Link, useHistory } from 'react-router-dom';

import HomeContainer from '../containers/HomeContainer';

export default function HomePage() {
  const history = useHistory();

  function handleClickLink(url) {
    history.push(url);
  }

  return (
    <div>
      <HomeContainer
        handleClickLink={handleClickLink}
      />
      <Link to="/about">About</Link>
    </div>
  );
}
