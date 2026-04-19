class Solution {
  /**
   * @param {number[]} nums
   * @param {number} val
   * @return {number}
   */

  // receive an array of int, and a int
  // return an int representing the num of int that are not equal to val

  // create 2 pointers that start from 0, and swap items if the right pointers
  // is equal to val, do this until the end
  // return the length of the elemets that are not val

  // Input: nums = [1,1,2,3,4], val = 1
  // Output: [2,3,4]
  // return 3

  removeElement(nums, val) {
    let l = 0;
    let r = 0;

    while (r < nums.length) {
      if (nums[r] !== val) {
        nums[l] = nums[r];
        l++;
      }
      r++;
    }

    return l;
  }
}
