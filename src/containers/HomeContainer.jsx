import React from 'react';

import { useDispatch } from 'react-redux';

import { loadInitialTest } from '../slice';

import Home from '../components/Home';

export default function HomeContainer({ handleClickLink }) {
  const dispatch = useDispatch();

  function handleClickTest() {
    dispatch(loadInitialTest());
    handleClickLink('/tests');
  }

  function handleClickAbout() {
    handleClickLink('/about');
  }

  return (
    <Home
      handleClickTest={handleClickTest}
      handleClickAbout={handleClickAbout}
    />
  );
}
