class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s, k) {
    let max = 0;
    let maxInt = 0;

    let apperances = new Map();

    let l = 0;
    let r = 0;

    while (r < s.length) {
      if (apperances.has(s[r])) {
        apperances.set(s[r], apperances.get(s[r]) + 1);
      } else {
        apperances.set(s[r], 1);
      }

      maxInt = Math.max(maxInt, apperances.get(s[r]));

      while (r - l + 1 - maxInt > k) {
        apperances.set(s[l], apperances.get(s[l]) - 1);
        l++;
      }

      max = Math.max(max, r - l + 1);

      r++;
    }

    return max;
  }
}
