class Solution {
  /**
   * @param {string} s
   * @return {number}
   */

  // receive a string always valid < 0
  // return an int representing the length of the longest
  // substring without duplicates

  // "zxyzxyz"
  // 3

  lengthOfLongestSubstring(s) {
    let max = 0;
    let subString = new Set();

    let l = 0;
    let r = 0;

    while (r < s.length) {
      while (subString.has(s[r])) {
        subString.delete(s[l]);
        l++;
      }

      subString.add(s[r]);
      max = Math.max(max, r - l + 1);

      r++;
    }

    return max;
  }
}
