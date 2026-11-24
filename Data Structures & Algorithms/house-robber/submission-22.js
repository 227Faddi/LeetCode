class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length < 2) return nums[0]
        let cache = new Map()

        function dp(i){
            if(i === 0) return nums[0]
            if(i === 1) return Math.max(nums[0], nums[1])

            if(cache.has(i)) return cache.get(i)
            cache.set(i, Math.max(nums[i] + dp(i - 2), dp(i - 1)))
            return cache.get(i)
        }
        
        return dp(nums.length - 1)
    }
}
