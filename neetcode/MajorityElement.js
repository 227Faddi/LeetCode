class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */

  // receive an array of nums
  // return the num that appears more than n / 2

  // Input: nums = [5,5,1,1,1,5,5]
  // Output: 5

  // count the occurences of each number
  // save them in an hashmap
  // return the value that appears the most

  majorityElement(nums) {
    let appears = new Map();

    for (let i = 0; i < nums.length; i++) {
      const curr = nums[i];

      if (appears.has(curr)) {
        appears.set(curr, appears.get(curr) + 1);
      } else {
        appears.set(curr, 1);
      }

      if (appears.get(curr) > Math.floor(nums.length / 2)) {
        return curr;
      }
    }
  }
}
