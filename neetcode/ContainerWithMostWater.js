class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */

  maxArea(heights) {
    let max = 0;

    for (let l = 0; l < heights.length - 1; l++) {
      for (let r = l + 1; r < heights.length; r++) {
        const length = r - l;
        const minHeigth = Math.min(heights[l], heights[r]);

        const area = length * minHeigth;

        if (area > max) {
          max = area;
        }
      }
    }

    return max;
  }
}
