import { calculateWinner, getGameStatus } from './utils';

const X = 'X';
const O = 'O';

describe('calculateWinner', () => {
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

describe('getGameStatus', () => {
  // Test cases for wins
  test.each([
    [X, [X, X, X, null, O, O, null, null, null], `Winner: ${X}`], // X wins in a row
    [O, [O, O, O, null, X, X, null, null, null], `Winner: ${O}`], // O wins in a row
    [X, [X, null, null, X, null, null, X, null, null], `Winner: ${X}`], // X wins in a column
    [O, [null, O, null, null, O, null, null, O, null], `Winner: ${O}`], // O wins in a column
    [X, [X, null, null, null, X, null, null, null, X], `Winner: ${X}`], // X wins diagonally
    [O, [null, null, O, null, O, null, O, null, null], `Winner: ${O}`] // O wins diagonally
  ])('should declare the correct winner (%s)', (winner, squares, expected) => {
    expect(getGameStatus(squares, true)).toBe(expected);
  });

  // Test cases for draws
  test('should declare a draw when the game is a draw', () => {
    const squares = [X, X, O, O, O, X, X, O, X];
    expect(getGameStatus(squares, true)).toBe('Draw');
  });

  // Test cases for ongoing games
  test.each([
    ['Next player: O', [X, O, X, X, null, null, null, null, null], false], // O's turn next
    ['Next player: X', [O, X, O, O, null, null, null, null, null], true] // X's turn next
  ])('should indicate which player\'s turn is next (%s)', (expected, squares, xIsNext) => {
    expect(getGameStatus(squares, xIsNext)).toBe(expected);
  });
});