import React from 'react';

// TODO: Hide "back button" when the user is on the first page
// TODO: Hide "next button" when the user is on the last page

export default function PageRoutingButtons({ questionId, handleClick }) {
  const beforeId = parseInt(questionId, 10) - 1;
  const nextId = parseInt(questionId, 10) + 1;

  return (
    <div>
      <a
        href={`/tests/${questionId}`}
        type="button"
        onClick={() => handleClick(beforeId)}
      >
        back
      </a>
      <a
        href={`/tests/${questionId}`}
        type="button"
        onClick={() => handleClick(nextId)}
      >
        next
      </a>
    </div>
  );
}
