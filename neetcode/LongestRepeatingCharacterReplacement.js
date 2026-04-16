class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s, k) {
    let subS = new Map();
    let max = 0;

    let l = 0;
    let r = 0;

    while (r < s.length) {
      if (subS.has(s[r])) {
        subS.set(s[r], subS.get(s[r]) + 1);
      } else {
        subS.set(s[r], 1);
      }

      const maxSub = Math.max(...subS.values());

      while (r - l + 1 - maxSub > k) {
        subS.set(s[l], subS.get(s[l]) - 1);
        l++;
      }

      max = Math.max(max, r - l + 1);

      r++;
    }

    return max;
  }
}
