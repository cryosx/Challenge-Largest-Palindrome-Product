/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits) {
  // var factor_0 = 0;
  // var factor_1 = 0;
  // var palindromeNumber = 0;

  // let palindromeNumberArr = [];

  let largestPalindrome = {
    factor_0: 0,
    factor_1: 0,
    palindromeNumber: 0
  };

  // do your work here
  for (let i = getLargestNum(digits); i >= getSmallestNum(digits); i--) {
    for (let j = i; j >= getSmallestNum(digits); j--) {
      let num = i * j;
      if (isPalindrome(num)) {
        if (num > largestPalindrome.palindromeNumber) {
          largestPalindrome.factor_0 = i;
          largestPalindrome.factor_1 = j;
          largestPalindrome.palindromeNumber = num;
        }
        // palindromeNumberArr.push(palindrome);
      }
    }
  }

  // palindromeNumberArr.forEach(function(elem) {
  //   if (elem.palindromeNumber > largestPalindrome.palindromeNumber) {
  //     largestPalindrome = elem;
  //   }
  // });

  function getLargestNum(digits) {
    let result = '';
    for (let i = 0; i < digits; i++) {
      result += 9;
    }
    return Number.parseInt(result);
  }

  function getSmallestNum(digits) {
    let result = '1';
    for (let i = 0; i < digits - 1; i++) {
      result += 0;
    }
    return Number.parseInt(result);
  }

  function isPalindrome(num) {
    const numAsString = num.toString();
    for (
      let i = 0, j = numAsString.length - 1;
      i < Math.floor(numAsString.length / 2);
      i++, j--
    ) {
      if (numAsString[i] !== numAsString[j]) {
        return false;
      }
    }
    return true;
  }

  return largestPalindrome;
};
