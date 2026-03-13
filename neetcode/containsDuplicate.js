class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */

  // input: an array of int
  // return true if a int is present more than once
  // [1, 2, 3, 3]
  // true // 3
  // [1,2,3]
  // false, no duplicate

  // checking the array, and count the appearance of each number
  // then check if the number was already counted, then return true
  // if we check all the array and all the values are just counted once
  // return false, because each value is unique

  hasDuplicate(nums) {
    const counts = new Map();

    for (const num of nums) {
      if (counts.has(num)) {
        return true;
      } else {
        counts.set(num, 1);
      }
    }

    return false;
  }
}
