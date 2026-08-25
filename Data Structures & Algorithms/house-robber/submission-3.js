class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let tab = new Array(nums.length).fill(-1)

        function dp(i){
            if(i >= nums.length ) return 0

            if(tab[i] >= 0) return tab[i]

            tab[i] = Math.max(nums[i] + dp(i + 2), dp(i + 1))
            return tab[i]
        }

        return dp(0)
    }
}
