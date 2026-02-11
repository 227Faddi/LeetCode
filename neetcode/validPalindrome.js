class Solution {
  /**
   * @param {string}
   * @return {boolean}
   */
  // receive a string, case sensitive
  // ignore non alpha numeric charts
  // return a boolean
  // always a string, from 1 to 1k char

  //PREP
  // clean the input
  // create a reversed variable
  // compare the 2
  // return the result

  isPalindrome(s) {
    const validS = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversedS = validS.split("").reverse().join("");

    const result = validS === reversedS;

    return result;
  }
}
