class Solution {
  /**
   * @param {string} s
   * @return {number}
   */

  // receive a string of letters
  // return a int representing the longest substring without duplicate charts
  // "zxyzxyz"
  // 3
  // 2 pointers, one at the beginning
  // have a counter for the length

  lengthOfLongestSubstring(s) {
    let subString = new Set();
    let max = 0;

    let l = 0;
    let r = 0;

    while (r < s.length) {
      if (subString.has(s[r])) {
        subString.delete(s[l]);
        l++;
      } else {
        subString.add(s[r]);
        max = Math.max(max, r - l + 1);
        r++;
      }
    }

    return max;
  }
}
