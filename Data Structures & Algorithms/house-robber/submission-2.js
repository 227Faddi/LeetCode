class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let memo = new Map()

        function dp(i){
            if(i >= nums.length ) return 0

            if(memo.get(i)) return memo.get(i)

            memo.set(i, Math.max(nums[i] + dp(i + 2), dp(i + 1)))
            return memo.get(i)
        }

        return dp(0)
    }
}
