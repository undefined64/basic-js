const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
//12345
function getSumOfDigits(n) {
  if (n < 10) {
    return n;
  }

  n = n
    .toString()
    .split('')
    .reduce((acc, val) => acc + +val, 0);

  return n < 10 ? n : getSumOfDigits(n);
}

module.exports = {
  getSumOfDigits,
};
