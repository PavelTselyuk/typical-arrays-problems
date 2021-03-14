
exports.min = function min(array) {
  let minElem = 0;
  if (!array || array.length < 1) {return 0};
  for (let i = 0; i < array.length; i++) {
    minElem = array[i] < minElem ? array[i] : minElem;
  }
  return minElem;
}

exports.max = function max(array) {
  let maxElem = 0;
  if (!array || array.length < 1) {return 0};
  for (let i = 0; i < array.length; i++) {
    maxElem = array[i] > maxElem ? array[i] : maxElem;
  }
    return maxElem;
}

exports.avg = function avg(array) {
  return array && array.length > 0 ? array.reduce((sum, current) => sum + current, 0) / array.length : 0;
}
