import React from 'react';

import { useDispatch } from 'react-redux';

import { loadInitialTest } from '../slice';

export default function HomeContainer({ handleClickLink }) {
  const dispatch = useDispatch();

  function handleClickTest() {
    dispatch(loadInitialTest());
    handleClickLink('/tests');
  }

  // TODO: Seperate to presentational components later

  return (
    <>
      <button
        type="button"
        onClick={handleClickTest}
      >
        테스트하기
      </button>
    </>
  );
}
