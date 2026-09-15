class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        let memo = new Array(nums.length).fill(1)

        for(let i = nums.length - 1; i >= 0; i--){
            for(let j = i + 1; j < nums.length; j++){
                if(nums[i] < nums[j]){
                    memo[i] = Math.max(memo[i], 1 + memo[j])
                }
            }
        }

        return Math.max(...memo)
    }
}
