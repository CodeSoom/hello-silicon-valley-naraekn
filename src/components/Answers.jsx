import React from 'react';

export default function Answers({ answers, onClick }) {
  return (
    <div>
      {
        answers.map((answer) => (
          <button
            key={answer.id}
            type="button"
            onClick={onClick}
          >
            {answer.content}
          </button>
        ))
      }
    </div>
  );
}
