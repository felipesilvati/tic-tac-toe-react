import React, { useState } from 'react';
import { Square } from './square';
import { calculateWinner, getGameStatus } from '../utils';

const initialSquareState = Array(9).fill(null);
const initialPlayerState = true;

export const Board = () => {
  const [squares, setSquares] = useState(initialSquareState);
  const [xIsNext, setXIsNext] = useState(initialPlayerState);
  const isGameStart = squares.every((square) => square === null);

  const handleClick = (i) => {
    const newSquares = squares.slice();
    const squareIsFilled = squares[i];

    if (calculateWinner(squares) || squareIsFilled) {
      return;
    }
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const handleReset = () => {
    setSquares(initialSquareState);
    setXIsNext(initialPlayerState);
  };

  const renderResetButton = () => (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleReset} disabled={isGameStart}>
      Reset
    </button>
  );

  const renderSquare = (i) => <Square value={squares[i]} onClick={() => handleClick(i)} />;

  return (
    <div>
      <div className="mb-4">{getGameStatus(squares, xIsNext)}</div>
      <div className="mb-4">{renderResetButton()}</div>
      <div className="grid grid-cols-3 gap-2">
        {Array(9).fill(null).map((_, i) => renderSquare(i))}
      </div>
    </div>
  );
}