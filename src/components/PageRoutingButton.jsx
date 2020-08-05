import React from 'react';

export default function PageRoutingButton({ title, handleClick }) {
  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
      >
        { title }
      </button>
    </div>
  );
}
