const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }

  const array = [...arr];

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === '--discard-next') {
      array[i] = undefined;
      if (array[i + 1]) {
        array[i + 1] = undefined;
      }
      i += 1;
    }
    if (array[i] === '--discard-prev') {
      array[i] = undefined;
      if (array[i - 1]) {
        array[i - 1] = undefined;
      }
    }
    if (array[i] === '--double-next') {
      if (array[i + 1]) {
        array[i] = array[i + 1];
      } else {
        array[i] = undefined;
      }
      i += 1;
    }
    if (array[i] === '--double-prev') {
      if (array[i - 1]) {
        array[i] = array[i - 1];
      } else {
        array[i] = undefined;
      }
    }
  }

  return array.filter((el) => el !== undefined);
}

module.exports = {
  transform,
};
