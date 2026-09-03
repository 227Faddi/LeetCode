class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProductDifference(nums) {
        const sortedNums = nums.sort((a,b) => a - b)
        return (sortedNums[sortedNums.length - 1] * sortedNums[sortedNums.length - 2]) - (sortedNums[0] * sortedNums[1])
    }
}
