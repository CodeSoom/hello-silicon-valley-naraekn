import React from 'react';

// import { useSelector } from 'react-redux';

// TODO: Remove this code after modifying design
import results from '../data/results';

import Result from '../components/Result';

// import { get } from '../utils';

export default function ResultContainer({ handleClickLink }) {
  // TODO: Remove this comment after modifying design
  // const { first, second, last } = useSelector(get('result'));

  // TODO: Remove this code after modifying design
  const first = results.find(({ id }) => id === 9);
  const second = results.find(({ id }) => id === 3);
  const last = results.find(({ id }) => id === 7);

  return (
    <>
      <Result
        first={first}
        second={second}
        last={last}
        handleClick={handleClickLink}
      />
    </>
  );
}
