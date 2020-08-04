import React from 'react';

export default function Questions({ questionId, question }) {
  return (
    <h1>
      질문
      { questionId }
      {' '}
      { question }
    </h1>
  );
}
