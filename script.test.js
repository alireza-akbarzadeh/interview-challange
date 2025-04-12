import { describe, it, expect } from 'vitest';

// Import the Array prototype extension
import './script.js';

describe('Array.prototype.myMap', () => {
  it('should transform each element in the array', () => {
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.myMap((num) => num * 2);
    expect(doubled).toEqual([2, 4, 6, 8, 10]);
  });

  it('should handle empty arrays', () => {
    const emptyArray = [];
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

describe('Array.prototype.myFilter', () => {
  it('should filter elements based on condition', () => {
    const numbers = [1, 2, 3, 4, 5];
    const evenNumbers = numbers.myFilter((num) => num % 2 === 0);
    expect(evenNumbers).toEqual([2, 4]);
  });

  it('should handle empty arrays', () => {
    const emptyArray = [];
    const result = emptyArray.myFilter((x) => x > 0);
    expect(result).toEqual([]);
  });

  it('should pass index and array to callback', () => {
    const arr = ['a', 'b', 'c'];
    const result = arr.myFilter((item, index) => index > 0);
    expect(result).toEqual(['b', 'c']);
  });
});

describe('Array.prototype.myReduce', () => {
  it('should reduce array to single value', () => {
    const numbers = [1, 2, 3, 4];
    const sum = numbers.myReduce((acc, curr) => acc + curr, 0);
    expect(sum).toBe(10);
  });

  it('should use first element as initial value if not provided', () => {
    const numbers = [1, 2, 3, 4];
    const sum = numbers.myReduce((acc, curr) => acc + curr);
    expect(sum).toBe(10);
  });

  it('should handle empty array with initial value', () => {
    const emptyArray = [];
    const result = emptyArray.myReduce((acc, curr) => acc + curr, 10);
    expect(result).toBe(10);
  });

  it('should pass all arguments to callback', () => {
    const arr = [1, 2, 3];
    const result = arr.myReduce((acc, curr, index, array) => {
      return acc + curr + index + array.length;
    }, 0);
    expect(result).toBe(12); // 0 + (1+0+3) + (2+1+3) + (3+2+3)
  });
});
