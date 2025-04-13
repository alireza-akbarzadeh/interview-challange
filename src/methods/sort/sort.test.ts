import './sort';

import { describe, it, expect } from 'vitest';
describe('Array.prototype.sort', () => {
  it('should use default string comparison when no callback is provided', () => {
    const fruits = ['banana', 'apple', 'orange', 'grape'];
    const sorted = fruits.mySort();
    expect(sorted).toEqual(['apple', 'banana', 'grape', 'orange']);
  });

  it('should not modify the original array', () => {
    const original = [5, 3, 1, 4, 2];
    const sorted = original.mySort((a, b) => a - b);
    expect(original).toEqual([5, 3, 1, 4, 2]);
    expect(sorted).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle empty arrays', () => {
    const emptyArray: number[] = [];
    const sorted = emptyArray.mySort();
    expect(sorted).toEqual([]);
  });

  it('should sort array with negative numbers', () => {
    const numbers = [-3, -1, -4, -2, 0];
    const sorted = numbers.mySort((a, b) => a - b);
    expect(sorted).toEqual([-4, -3, -2, -1, 0]);
  });

  it('should sort array with duplicate numbers', () => {
    const numbers = [3, 1, 2, 3, 2];
    const sorted = numbers.mySort((a, b) => a - b);
    expect(sorted).toEqual([1, 2, 2, 3, 3]);
  });

  it('should sort array with strings of different lengths', () => {
    const strings = ['a', 'abc', 'ab'];
    const sorted = strings.mySort();
    expect(sorted).toEqual(['a', 'ab', 'abc']);
  });
});
