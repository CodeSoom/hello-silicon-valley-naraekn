import React from 'react';

import { useDispatch } from 'react-redux';

import { loadInitialTest } from '../slice';

import Home from '../components/Home';

export default function HomeContainer({ handleClickLink }) {
  const dispatch = useDispatch();

  function handleClickTest() {
    dispatch(loadInitialTest());
    handleClickLink('/who-are-you');
  }

  function handleClickContributors() {
    handleClickLink('/contributors');
  }

  return (
    <Home
      handleClickTest={handleClickTest}
      handleClickContributors={handleClickContributors}
    />
  );
}
