const array = [1, 2, 3, 45];

Array.prototype.myMap = function (callback) {
  let result = [];
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    result.push(callback(element, index, this));
  }
  return result;
};

Array.prototype.myFilter = function (callback) {
  let result = [];

  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    let callbackResult = callback(element, index, this);
    if (callbackResult) {
      result.push(element);
    }
  }
  return result;
};
Array.prototype.myFind = function (callback) {
  let result = null;

  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    let foundValue = callback(element, index, this);
    if (foundValue && !result) {
      result = element;
      break;
    }
  }
  return result;
};
Array.prototype.myReduce = function (callback, initialValue) {
  let cloneValue = JSON.parse(JSON.stringify(initialValue));

  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    const result = callback(cloneValue, element);
    cloneValue = result;
  }
  return cloneValue;
};

Array.prototype.mySort = function (callback) {
  let arr = [...this];

  if (!callback) {
    callback = (a, b) => String(a).localeCompare(String(b));
  }

  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      const compareResult = callback(arr[j], arr[j + 1]);

      if (compareResult > 0) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
};
