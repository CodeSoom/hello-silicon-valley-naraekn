import React from 'react';

import { useHistory } from 'react-router-dom';

import WhoAreYouContainer from '../containers/WhoAreYouContainer';

export default function WhoAreYouPage() {
  const history = useHistory();

  function handleClickLink(url) {
    history.push(url);
  }

  return (
    <WhoAreYouContainer handleClickLink={handleClickLink} />
  );
}
