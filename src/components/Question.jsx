import React from 'react';

export default function Question({ content, handleClick }) {
  const { question, answers } = content;

  return (
    <div>
      <h1>
        { question }
      </h1>
      <div>
        {
          answers.map((answer) => (
            <button
              key={answer.id}
              type="button"
              onClick={handleClick}
            >
              {answer.title}
            </button>
          ))
        }
      </div>
    </div>
  );
}
