class Solution {
  /**
   * @param {string[]} strs
   * @return {string}
   */

  // receive an array of string
  // return a string with the longest prefix from all the strings
  // ["bat","bag","bank","band"]
  // "ba"

  // check all the string, chart by chart
  // if the chart are all equal then continue
  // if not return the current string

  longestCommonPrefix(strs) {
    let result = "";

    for (let i = 0; i < strs[0].length; i++) {
      for (let j = 1; j < strs.length; j++) {
        if (i === strs[j].length || strs[0][i] !== strs[j][i]) {
          return result;
        }
      }

      result += strs[0][i];
    }

    return result;
  }
}
