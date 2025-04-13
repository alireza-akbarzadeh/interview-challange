import './find';

describe('Array.prototype.myFind', () => {
  it('should find the first element that satisfies the condition', () => {
    const numbers = [1, 2, 3, 4, 5];
    const found = numbers.myFind((num) => num > 3);
    expect(found).toBe(4);
  });

  it('should return null if no element satisfies the condition', () => {
    const numbers = [1, 2, 3, 4, 5];
    const found = numbers.myFind((num) => num > 10);
    expect(found).toBe(null);
  });

  it('should handle empty arrays', () => {
    const emptyArray: number[] = [];
    const result = emptyArray.myFind((x) => x > 0);
    expect(result).toBe(null);
  });

  it('should pass index and array to callback', () => {
    const arr = ['a', 'b', 'c'];
    const result = arr.myFind((item, index, array) => {
      return index === 1 && array.length === 3;
    });
    expect(result).toBe('b');
  });
});
