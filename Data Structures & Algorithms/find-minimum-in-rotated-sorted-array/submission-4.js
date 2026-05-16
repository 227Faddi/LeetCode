class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    // receive a sorted array that has been rotated
    // return the minimun value from the array
    // Input: nums = [3,4,5,6,1,2]
    // Output: 1

    findMin(nums) {
        let res = nums[0]
        let l = 0
        let r = nums.length - 1

        while(l <= r){
            if(nums[l] < nums[r]){
                res = Math.min(res, nums[l])
                break
            } 

            let m = Math.floor((l + r) / 2)
            res = Math.min(res, nums[m])

            if(nums[m] >= nums[l]){
                res = Math.min(res, nums[l])
                l = m + 1
            } else {
                r = m - 1
            }
        } 

        return res
    }
}
