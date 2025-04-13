Array.prototype.myReduce = function (callback, initialValue) {
  let cloneValue = structuredClone(initialValue);

  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    const result = callback(cloneValue, element, index, this);
    cloneValue = result;
  }
  return cloneValue;
};
