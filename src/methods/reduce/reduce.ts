Array.prototype.myReduce = function <U>(
  callback: (
    accumulator: U,
    currentValue: any,
    currentIndex: number,
    array: any[]
  ) => U,
  initialValue?: U
): U {
  let cloneValue = structuredClone(initialValue);

  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    const result = callback(cloneValue as U, element, index, this);
    cloneValue = result;
  }
  return cloneValue as U;
};
