class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s) {
    let max = 0;
    let sub = new Set();

    let l = 0;
    let r = 0;

    while (r < s.length) {
      while (sub.has(s[r])) {
        sub.delete(s[l]);
        l++;
      }

      sub.add(s[r]);
      max = Math.max(max, sub.size);

      r++;
    }

    return max;
  }
}
