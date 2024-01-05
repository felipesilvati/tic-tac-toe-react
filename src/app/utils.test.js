import { calculateWinner } from './utils';

describe('utils', () => {
  describe('calculateWinner', () => {
    it('should return null if there is no winner', () => {
      const squares = Array(9).fill(null);
      expect(calculateWinner(squares)).toBe(null);
    });
    it('should return X if X is the winner', () => {
      const squares = ['X', 'X', 'X', 'O', 'O', null, null, null, null];
      expect(calculateWinner(squares)).toBe('X');
    });
    it('should return O if O is the winner', () => {
      const squares = ['X', 'X', null, 'O', 'O', 'O', null, null, null];
      expect(calculateWinner(squares)).toBe('O');
    });
  })
})