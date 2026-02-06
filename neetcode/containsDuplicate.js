class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */

  // receive an arrat of integers
  // return if a duplicate is present
  // Input: nums = [1, 2, 3, 3]
  // Output: true
  // loop into the array an check each value,
  // saved numbers in a set so they will be unique
  // while looping if a number is already present then return true
  // if the set is equal to the array then return true else false

  hasDuplicate(nums) {
    const list = new Set([]);

    for (let i = 0; i < nums.length; i++) {
      if (list.has(nums[i])) {
        return true;
      }

      list.add(nums[i]);
    }

    return false;
  }
}
