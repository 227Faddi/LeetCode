class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    // receive an array of num, that was originally in an ascending order
    // that has been rotated then, it may in the same position everytime
    // return the minimum num inside the array

    // binary search 
    // Input: nums = [3,4,5,6,1,2]
    // Output: 1

    findMin(nums) {
        let res = nums[0]
        let l = 0
        let r = nums.length - 1

        while(l <= r){
            if(nums[l] <= nums[r]){
                res = Math.min(res, nums[l])
                break
            }

            let m = l + Math.floor((r - l) / 2)
            res = Math.min(res, nums[m])

            if(nums[m] >= nums[l]){
                l = m + 1
            } else {
                r = m - 1
            }
        }

        return res
    }
}
