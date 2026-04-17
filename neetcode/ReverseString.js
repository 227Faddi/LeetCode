class Solution {
  /**
   * @param {character[]} s
   * @return {void} Do not return anything, modify s in-place instead.
   */

  // receive an array with multiple char representing the letter of the string
  // return the array reversed
  // with no extra memory and O(1)
  // use the reverse method and return the array reversed
  // or two pointers

  reverseString(s) {
    let l = 0;
    let r = s.length - 1;

    while (l < r) {
      let temp = s[l];
      s[l] = s[r];
      s[r] = temp;

      l++;
      r--;
    }

    return s;
  }
}
