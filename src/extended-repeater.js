const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|',
  } = options;

  let res = '';
  let resAddition = '';

  for (let i = 1; i < additionRepeatTimes; i += 1) {
    resAddition += addition + additionSeparator;
  }
  resAddition += addition;

  for (let i = 1; i < repeatTimes; i += 1) {
    res += str + resAddition + separator;
  }
  res += str + resAddition;

  return res;
}

module.exports = {
  repeater,
};
