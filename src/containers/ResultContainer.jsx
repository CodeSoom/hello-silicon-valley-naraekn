import React from 'react';

import { useSelector } from 'react-redux';

import Result from '../components/Result';

import { get } from '../utils';

export default function ResultContainer() {
  const { first, second, last } = useSelector(get('result'));

  // TODO: Decide whether to use `Link` or `useHistory`
  // TODO: This is sample codes for ResultPage
  return (
    <>
      <Result
        first={first}
        second={second}
        last={last}
      />
    </>
  );
}
