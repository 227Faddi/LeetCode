class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */

  // array of int nums
  // return an array containing all the possible uninque triplets
  // that sum up to exactly 0

  // [-1,0,1,2,-1,-4]
  // [[-1,0,1], [-1,-1,2]]

  // create an empty array, where i'll store all the triplets after
  // sort the array, in increasing order
  // [-4,-1,-1,0,1,2]

  // create a loop where we check each num

  // [-1, 0, 1] = 0 ? 1 > 0 =>

  // create 2 pointers to find the 2 missing num to sum up to 0

  // this will run until the 2 pointers meet each others

  // every time we change pointer make sure it's different than the previous one

  // if we didn't find any triplets that sum up to 0
  // then go the next num

  // valid [-1, -1, 2]
  // valid [-1, 0, 1]

  threeSum(nums) {
    let result = [];

    const sortedN = nums.sort((a, b) => a - b);

    for (let i = 0; i < sortedN.length; i++) {
      if (i > 0 && sortedN[i] === sortedN[i - 1]) {
        continue;
      }

      const num = sortedN[i];

      let l = i + 1;
      let r = sortedN.length - 1;

      while (l < r) {
        const total = num + sortedN[l] + sortedN[r];

        if (total > 0) {
          r--;
        } else if (total < 0) {
          l++;
        } else {
          result.push([num, sortedN[l], sortedN[r]]);
          l++;

          while (l < r && sortedN[l] === sortedN[l - 1]) {
            l++;
          }
        }
      }
    }

    return result;
  }
}
