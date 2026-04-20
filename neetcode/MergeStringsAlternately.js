class Solution {
  /**
   * @param {string} word1
   * @param {string} word2
   * @return {string}
   */

  // receive 2 string
  // return a merged string with alternate char
  //
  //Input: word1 = "abc", word2 = "xyz"
  //Output: "axbycz"
  //Input: word1 = "ab",
  //       word2 = "abbxxc"
  //Output: "aabbbxxc"

  // find the smaller string
  // create 2 pointers that goes from the first to last chart of smaller string
  // add all char together and then add the rest of the longer string if any
  mergeAlternately(word1, word2) {
    let result = "";
    const max = Math.max(word1.length, word2.length);
    let l = 0;

    while (l < max) {
      if (word1[l]) {
        result += word1[l];
      }

      if (word2[l]) {
        result += word2[l];
      }

      l++;
    }

    return result;
  }
}
