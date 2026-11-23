class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length < 2) return nums[0]

        let memo = new Array(nums.length).fill(0)
        memo[0] = nums[0]
        memo[1] = Math.max(nums[0], nums[1])
        
        for(let i = 2; i < nums.length; i++){
            memo[i] = Math.max(memo[i - 1], memo[i - 2] + nums[i])
        }

        return memo[nums.length - 1]
    }
}
