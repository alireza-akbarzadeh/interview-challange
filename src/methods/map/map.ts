Array.prototype.myMap = function (callback) {
  let result = [];
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    result.push(callback(element, index, this));
  }
  return result;
};
