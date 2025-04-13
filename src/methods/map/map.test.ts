import './map.ts';
import { describe, it, expect } from 'vitest';

describe('Array.prototype.myMap', () => {
  it('should transform each element in the array', () => {
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.myMap((num) => num * 2);
    expect(doubled).toEqual([2, 4, 6, 8, 10]);
  });

  it('should handle empty arrays', () => {
    const emptyArray: number[] = [];
    const result = emptyArray.myMap((x) => x * 2);
    expect(result).toEqual([]);
  });

  it('should pass index and array to callback', () => {
    const arr = ['a', 'b', 'c'];
    const result = arr.myMap((item, index, array) => {
      return `${item}-${index}-${array.length}`;
    });
    expect(result).toEqual(['a-0-3', 'b-1-3', 'c-2-3']);
  });
});
