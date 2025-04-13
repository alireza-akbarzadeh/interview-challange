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
