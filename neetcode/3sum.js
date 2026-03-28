class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */

  // receive an array of numbers
  // find and return all the possible triplets that sum up to 0
  // with no duplicates

  // [-1,0,1,2,-1,-4]
  // [[-1,-1,2],[-1,0,1]]

  // sort the array
  // [-4,-1,-1,0,1,2]

  // first loop to check each num
  // if the num is equal to the previous one
  // then skip it

  // for each num, try to find the couple that is missing to sum up to 0
  // use a two pointer to check

  threeSum(nums) {
    const result = [];

    const sorted = nums.sort((a, b) => a - b);

    for (let i = 0; i < sorted.length; i++) {
      if (i > 0 && sorted[i] === sorted[i - 1]) continue;

      const num = sorted[i];

      let l = i + 1;
      let r = sorted.length - 1;

      while (l < r) {
        const total = num + sorted[l] + sorted[r];

        if (total > 0) {
          r--;
        } else if (total < 0) {
          l++;
        } else {
          result.push([num, sorted[l], sorted[r]]);
          l++;
          while (sorted[l] === sorted[l - 1] && l < r) {
            l++;
          }
        }
      }
    }

    return result;
  }
}
