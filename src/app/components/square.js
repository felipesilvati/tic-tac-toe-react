import React from 'react';

export const Square = ({ value, onClick }) => {
  return (
    <div
      className="h-8 w-8 xs:h-16 xs:w-16 sm:h-24 sm:w-24 border-2 border-gray-400 flex items-center justify-center text-sm sm:text-4xl"
      onClick={onClick}
    >
      {value}
    </div>
  );
}