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
