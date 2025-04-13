import './filter';
import { describe, it, expect } from 'vitest';

describe('Array.prototype.myFilter', () => {
  it('should filter elements based on condition', () => {
    const numbers = [1, 2, 3, 4, 5];
    const evenNumbers = numbers.myFilter((num) => num % 2 === 0);
    expect(evenNumbers).toEqual([2, 4]);
  });

  it('should handle empty arrays', () => {
    const emptyArray: number[] = [];
    const result = emptyArray.myFilter((x) => x > 0);
    expect(result).toEqual([]);
  });

  it('should pass index and array to callback', () => {
    const arr = ['a', 'b', 'c'];
    const result = arr.myFilter((item, index) => index > 0);
    expect(result).toEqual(['b', 'c']);
  });
});
