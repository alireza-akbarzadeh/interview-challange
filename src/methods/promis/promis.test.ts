import './reduce';
import { describe, it, expect } from 'vitest';

describe('Array.prototype.myReduce', () => {
  it('should handle empty array with initial value', () => {
    const result = [].myReduce((acc, curr) => acc + curr, 0);
    expect(result).toBe(0);
  });

  it('should pass all arguments to callback', () => {
    const array = [1, 2, 3];
    const callback = (acc, curr, index, arr) => {
      expect(arr).toBe(array);
      return acc + curr;
    };
    const result = array.myReduce(callback, 0);
    expect(result).toBe(6);
  });
});

describe('Promise.prototype.myAll', () => {
  it('should resolve all promises', async () => {
    const promises = [
      Promise.resolve(1),
      Promise.resolve(2),
      Promise.resolve(3),
    ];
    const result = await Promise.prototype.myAll(promises);
    expect(result).toEqual([1, 2, 3]);
  });

  it('should reject if any promise rejects', async () => {
    const promises = [
      Promise.resolve(1),
      Promise.reject('error'),
      Promise.resolve(3),
    ];
    await expect(Promise.prototype.myAll(promises)).rejects.toBe('error');
  });

  it('should handle an empty array of promises', async () => {
    const promises: Promise<any>[] = [];
    const result = await Promise.prototype.myAll(promises);
    expect(result).toEqual([]);
  });

  it('should resolve with mixed promise values', async () => {
    const promises = [
      Promise.resolve(1),
      Promise.resolve('two'),
      Promise.resolve(true),
    ];
    const result = await Promise.prototype.myAll(promises);
    expect(result).toEqual([1, 'two', true]);
  });
});
