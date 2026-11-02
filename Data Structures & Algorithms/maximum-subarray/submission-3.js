class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let currMax = 0
        let max = nums[0]

        for(const n of nums){
            if(currMax < 0){
                currMax = 0
            }

            currMax += n
            max = Math.max(max, currMax)
        }

        return max
    }
}
