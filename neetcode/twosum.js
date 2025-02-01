class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */

  // we receive an array of integers and a target number
  // return an array containing the 2 indices of the numbers that add up to the target
  //  Input: nums = [3,4,5,6], target = 7
  // Output: [0,1]

  // loop into the array, and for each number, check which one is the complementary number needed to to reach the target
  // store the current value, and every time if the

  twoSum(nums, target) {
    const result = new Map();

    for (let i = 0; i < nums.length; i++) {
      const complementary = target - nums[i];

      if (result.has(complementary)) {
        return [i, result.get(complementary)];
      } else {
        result.set(nums[i], i);
      }
    }
  }
}
