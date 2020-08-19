import React from 'react';

import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { get } from '../utils';

export default function ResultContainer() {
  const { first, second, last } = useSelector(get('result'));

  // TODO: Seperate presentational components later
  // TODO: Decide whether to use `Link` or `useHistory`
  // TODO: This is sample codes for ResultPage
  return (
    <>
      <h1>결과</h1>
      <div>{first.name}</div>
      <div>{second.name}</div>
      <div>{last.name}</div>
      <Link to="/about">만든사람들</Link>
    </>
  );
}
