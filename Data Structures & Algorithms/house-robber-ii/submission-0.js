class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    // 
    rob(nums) {
if (nums.length === 1) return nums[0];

        let nums1 = nums.slice(0, nums.length - 1);
        let nums2 = nums.slice(1);

        let memo1 = new Array(nums.length - 1).fill(-1);
        let memo2 = new Array(nums.length - 1).fill(-1);

        function dp(i, arr, memo) {
            if (i >= arr.length) return 0;
            if (memo[i] !== -1) return memo[i];

            memo[i] = Math.max(arr[i] + dp(i + 2, arr, memo), dp(i + 1, arr, memo));
            return memo[i];
        }

        return Math.max(dp(0, nums1, memo1), dp(0, nums2, memo2));
    }
}
