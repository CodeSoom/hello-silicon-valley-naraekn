import React from 'react';

import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { get } from '../utils';

export default function ResultContainer() {
  const { name, description } = useSelector(get('result'));

  // TODO: Seperate presentational components later
  // TODO: Decide whether to use `Link` or `useHistory`
  return (
    <>
      <h1>결과</h1>
      <h3>
        { name }
      </h3>
      <div>
        { description }
      </div>
      <Link to="/about">만든사람들</Link>
    </>
  );
}
