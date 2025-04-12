Array.prototype.mySort = function (callback) {
  const value = [...this];
  if (!callback) {
    callback = (a, b) => String(a).localCompare(String(b));
  }
  const len = value.length;
  for (let index = 0; index < len; index++) {
    for (let j = 0; j < len - 1 - index; j++) {
      const compareResult = callback(value[index], value[j]);
      if (compareResult > 0) {
        let temp = value[i];
        value[j] = value[j + 1];
        value[j + 1] = temp;
      }
    }
  }
  return value;
};
