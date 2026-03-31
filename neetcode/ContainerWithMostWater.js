class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */

  // receive an array of int, not ordered
  // an array representing the max area

  // [1,7,2,5,4,7,3,6]
  //  36

  maxArea(heights) {
    let max = 0;

    let l = 0;
    let r = heights.length - 1;

    while (l < r) {
      const height = Math.min(heights[l], heights[r]);
      const width = r - l;
      const area = width * height;

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
