class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */

  // receive an array of nums ordered in increasing order
  // return an array of int, of the indices that add up to the target (starting from 1)
  // numbers = [1,4,6,9,12], target = 10
  // [1,4]

  // create 2 pointers
  // and loop into the array while checking if the total of the pointerts is bigger
  // than target then decrease the right pointer else increase the left one
  // until i find a match and return the indeces + 1

  twoSum(numbers, target) {
    let l = 0;
    let r = numbers.length - 1;

    while (numbers[l] + numbers[r] !== target) {
      const total = numbers[l] + numbers[r];

      if (total > target) {
        r--;
      } else if (total < target) {
        l++;
      }
    }

    return [l + 1, r + 1];
  }
}
