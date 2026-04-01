class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */

  // receive an array of int
  // return the max area from all the possible containers
  // height * width
  // use two pointers
  // check the area from the smallest height
  // keep track of a max value
  // change pointer in base of the smallest value
  // return the max value after the l >= r

  // Input: height = [1,7,2,5,4,7,3,6]
  // Output: 36

  maxArea(heights) {
    let max = 0;

    let l = 0;
    let r = heights.length - 1;

    while (l < r) {
      const heigth = Math.min(heights[l], heights[r]);
      const width = r - l;
      const area = width * heigth;

      if (area > max) {
        max = area;
      }

      if (heights[l] < heights[r]) {
        l++;
      } else if (heights[r] < heights[l]) {
        r--;
      } else {
        l++;
      }
    }

    return max;
  }
}
