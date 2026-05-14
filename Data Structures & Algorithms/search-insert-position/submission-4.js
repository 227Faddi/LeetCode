class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */

    // receive a sorted array of nums
    // return the index of the target or if not present return the possible
    // Input: nums = [-1,0,2,4,6,8], target = 5
    // Output: 4
    // use a binary search to look up for the value
    // if the value is not present return the last num
    // index + 1

    searchInsert(nums, target) {
        let m
        let l = 0
        let r = nums.length - 1

        while(l <= r){
            m = Math.floor((r + l) / 2)
            console.log(nums[m])
            if(nums[m] === target) return m

            if(nums[m] < target){
                l = m + 1
            } else {
                r = m - 1
            }
        }
        
        return l
    }
}
