Array.prototype.myReduce = function (callback, initialValue) {
  var cloneValue =
    initialValue !== undefined ? structuredClone(initialValue) : this[0];
  for (
    var index = initialValue !== undefined ? 0 : 1;
    index < this.length;
    index++
  ) {
    var element = this[index];
    var result_1 = callback(cloneValue, element, index, this);
    cloneValue = result_1;
  }
  return cloneValue;
};
var arr = [1, 2, 3];
var result = arr.myReduce(function (acc, curr, index, array) {
  return acc + curr + index + array.length;
}, 0);
console.log(result);
