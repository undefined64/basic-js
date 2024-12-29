const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(mode = true) {
    this.reverse = mode;
  }

  alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';

  encrypt(string, key) {
    if (!string || !key) {
      throw new Error('Incorrect arguments!');
    }

    let result = '';
    let keyIndex = 0;
    string = string.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < string.length; i += 1) {
      if (this.alph.indexOf(string[i]) === -1) {
        result += string[i];
        continue;
      }
      let offset = this.alph.indexOf(key[keyIndex % key.length]);
      let letterIndex = this.alph.indexOf(string[i]);
      let resultIndex = offset + letterIndex;
      result += this.alph.charAt(resultIndex);
      keyIndex += 1;
    }
    if (this.reverse) {
      return result;
    } else {
      return result.split('').reverse().join('');
    }
  }
  decrypt(string, key) {
    if (!string || !key) {
      throw new Error('Incorrect arguments!');
    }

    let result = '';
    let keyIndex = 0;
    string = string.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < string.length; i += 1) {
      if (this.alph.indexOf(string[i]) === -1) {
        result += string[i];
        continue;
      }
      let offset = this.alph.indexOf(key[keyIndex % key.length]);
      let letterIndex = this.alph.indexOf(string[i]);
      let resultIndex = letterIndex - offset;
      result += this.alph.at(resultIndex);
      keyIndex += 1;
    }
    if (this.reverse) {
      return result;
    } else {
      return result.split('').reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine,
};
