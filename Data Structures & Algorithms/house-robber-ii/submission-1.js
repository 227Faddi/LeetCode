class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    rob(nums) {
        if (nums.length === 1) return nums[0];

        return Math.max(this.dp(nums.slice(0, nums.length - 1)), this.dp(nums.slice(1)));
    }

    dp(nums) {
        let one = 0
        let two = 0

        for(const num of nums){
            let newNum = Math.max(one + num, two)
            one = two
            two = newNum
        }

        return two
    }
}
