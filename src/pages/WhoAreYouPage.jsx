import React from 'react';

import { useHistory } from 'react-router-dom';

import { scrollToTop } from '../utils';

import TopBar from '../components/who-are-you/TopBar';
import WhoAreYouContainer from '../containers/WhoAreYouContainer';
import ButtonsBarContainer from '../containers/ButtonsBarContainer';

export default function WhoAreYouPage() {
  const history = useHistory();

  function handleClickResult() {
    history.push('/result');

    scrollToTop();
  }

  return (
    <>
      <TopBar />
      <WhoAreYouContainer />
      <ButtonsBarContainer
        handleClickResult={handleClickResult}
      />
    </>
  );
}
