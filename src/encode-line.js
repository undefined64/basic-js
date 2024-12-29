const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let symbolCount = 1;
  let counterArray = [];

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[i + 1]) {
      symbolCount += 1;
      continue;
    } else {
      counterArray.push(symbolCount > 1 ? `${symbolCount}${str[i]}` : str[i]);
      symbolCount = 1;
    }
  }
  return counterArray.join('');
}

module.exports = {
  encodeLine,
};
