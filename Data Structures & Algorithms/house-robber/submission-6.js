class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let memo = new Array(nums.length).fill(-1)

        function dp(i){
            if(i >= nums.length) return 0
            if(memo[i] !== -1) return memo[i]

            memo[i] = Math.max(nums[i] + dp(i + 2), dp(i + 1))
            return memo[i]
        }

        return dp(0)
    }
}
