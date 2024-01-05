export const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const winningLine = lines.find(([a, b, c]) => {
    return squares[a] && squares[a] === squares[b] && squares[a] === squares[c];
  });

  return winningLine ? squares[winningLine[0]] : null;
};

export const getGameStatus = (squares, xIsNext) => {
  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every((square) => square !== null);
  const nextPlayer = xIsNext ? 'X' : 'O';

  if (isDraw) {
    return 'Draw';
  }

  if (winner) {
    return `Winner: ${winner}`;
  }

  return `Next player: ${nextPlayer}`;
};