import { calculateWinner } from './utils';

describe('calculateWinner', () => {
  const X = 'X';
  const O = 'O';

  // Horizontal Wins
  test.each([
    [X, [X, X, X, null, null, null, null, null, null]], // top row
    [O, [null, null, null, O, O, O, null, null, null]], // middle row
    [X, [null, null, null, null, null, null, X, X, X]], // bottom row
  ])('should identify a winner in a row (%s)', (winner, squares) => {
    expect(calculateWinner(squares)).toBe(winner);
  });

  // Vertical Wins
  test.each([
    [X, [X, null, null, X, null, null, X, null, null]], // left column
    [O, [null, O, null, null, O, null, null, O, null]], // middle column
    [X, [null, null, X, null, null, X, null, null, X]], // right column
  ])('should identify a winner in a column (%s)', (winner, squares) => {
    expect(calculateWinner(squares)).toBe(winner);
  });

  // Diagonal Wins
  test.each([
    [O, [O, null, null, null, O, null, null, null, O]], // top-left to bottom-right
    [X, [null, null, X, null, X, null, X, null, null]], // top-right to bottom-left
  ])('should identify a winner on a diagonal (%s)', (winner, squares) => {
    expect(calculateWinner(squares)).toBe(winner);
  });

  // No Winner
  test('should return null when there is no winner', () => {
    const squares = [X, O, X, X, O, O, O, X, X];
    expect(calculateWinner(squares)).toBe(null);
  });

  // Draw
  test('should return null in a draw', () => {
    const squares = [X, X, O, O, O, X, X, O, X];
    expect(calculateWinner(squares)).toBe(null);
  });
});