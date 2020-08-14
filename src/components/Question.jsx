import React from 'react';

export default function Question({
  id, content, selectedAnswer, handleClickAnswer,
}) {
  const { question, options } = content;

  const isSelected = (index) => index === selectedAnswer;

  const handleClick = (answerId) => handleClickAnswer({
    questionId: id,
    answerId,
  });

  return (
    <div>
      <h1>
        { question }
      </h1>
      <div>
        {
          options.map((answer) => (
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
