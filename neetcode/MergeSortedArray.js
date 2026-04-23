class Solution {
  /**
   * @param {number[]} nums1
   * @param {number} m
   * @param {number[]} nums2
   * @param {number} n
   * @return {void} Do not return anything, modify nums1 in-place instead.
   */

  merge(nums1, m, nums2, n) {
    let first = m + n - 1;
    let second = 0;

    while (second < nums2.length) {
      nums1[first] = nums2[second];
      first--;
      second++;
    }

    nums1.sort((a, b) => a - b);
  }
}
