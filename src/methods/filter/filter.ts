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
