import React from 'react';

export default function Overview({ content }) {
  const { title, explanation } = content;

  return (
    <>
      <h2>
        {title}
      </h2>
      <div>
        {explanation}
      </div>
    </>
  );
}
