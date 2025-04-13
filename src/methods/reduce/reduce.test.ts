import './reduce';

describe('Array.prototype.myReduce', () => {
  it('should reduce array to single value', () => {
    const numbers = [1, 2, 3, 4];
    const sum = numbers.myReduce((acc, curr) => acc + curr, 0);
    expect(sum).toBe(10);
  });

  it('should use first element as initial value if not provided', () => {
    const numbers: number[] = [1, 2, 3, 4];
    const sum = numbers.myReduce((acc: number, curr: number) => acc + curr);
    expect(sum).toBe(10);
  });

  it('should handle empty array with initial value', () => {
    const emptyArray: number[] = [];
    const result = emptyArray.myReduce((acc, curr) => acc + curr, 10);
    expect(result).toBe(10);
  });

  it('should pass all arguments to callback', () => {
    const arr = [1, 2, 3];
    const result = arr.myReduce((acc, curr, index, array) => {
      return acc + curr + index + array.length;
    }, 0);
    expect(result).toBe(12);
  });
});
