class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */

  // a string always valid
  // return a boolean indication if it's a palindrome
  // a palindrome is a string that can be read forward and backward the same way

  //"Was it a car or a cat I saw?"
  //"wasitacaroracatisaw"

  // cleaning up the string, and remove every non alphanumeric chart
  // check each side and see if each letters is equal to the other side
  // if yes, then continue towards the middle of the string
  // if not return false directly
  // when we reach the middle and all the chart are equal
  // we can just return true, since is a palindrome

  isPalindrome(s) {
    const cleanS = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

    let l = 0;
    let r = cleanS.length - 1;

    while (l < r) {
      if (cleanS[l] == cleanS[r]) {
        l++;
        r--;
      } else {
        return false;
      }
    }

    return true;
  }
}
