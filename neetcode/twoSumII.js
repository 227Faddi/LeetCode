class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */

  // receive an array of increasing int
  // return an array with the indices from 1 of the nums that sum up to target
  // numbers = [1,2,3,4] target = 3
  // [1,2]

  // one pointer on the r, and one on the l

  twoSum(numbers, target) {
    let l = 0;
    let r = numbers.length - 1;

    while (l < r) {
      const total = numbers[l] + numbers[r];

      if (total === target) {
        return [l + 1, r + 1];
      }

      if (total < target) {
        l++;
      } else {
        r--;
      }
    }
  }
}
