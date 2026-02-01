class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */

  // receive 2 string , always lowercase english letters
  // return a boolean indicating if the 2 strings are anagrams, it means it they contains the same exact letter
  // Input: s = "racecar", t = "carrace"
  // output: true

  // order both strings, and compare them
  // return true if they are equal and false if not

  isAnagram(s, t) {
    const sArray = s.split("").sort().join("");
    const tArray = t.split("").sort().join("");

    return sArray === tArray;
  }
}
