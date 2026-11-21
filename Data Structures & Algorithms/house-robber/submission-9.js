class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let memo = new Array(nums.length + 1).fill(0)
        memo[1] = nums[0]

        for(let i = 2; i < memo.length; i++){
            memo[i] = Math.max(memo[i - 1], memo[i - 2] + nums[i - 1])
        }

        return memo[memo.length - 1]
    }
}
