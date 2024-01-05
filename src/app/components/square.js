import React from 'react';

export const Square = ({ value, onClick }) => {
  return (
    <button
      className="h-24 w-24 border-2 border-gray-400 flex items-center justify-center text-4xl"
      onClick={onClick}
    >
      {value}
    </button>
  );
}