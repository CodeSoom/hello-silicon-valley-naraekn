import React from 'react';

export default function Question({
  content, selectedAnswer, handleClick,
}) {
  const { question, answers } = content;

  const isSelected = (id) => id === selectedAnswer;

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
              onClick={() => handleClick(answer.id)}
            >
              {answer.title}
              {isSelected(answer.id) && '(V)'}
            </button>
          ))
        }
      </div>
    </div>
  );
}
