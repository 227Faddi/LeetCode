class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */

    // receive an array of unique nums
    // and a target number to find

    // return the index of the target number or return -1

    // Input: nums = [3,4,5,6,1,2], target = 1
    // Output: 4

    // use binary search with 2 pointers
    // look up for the value, and return its index
    // if the value is not there then return -1

    search(nums, target) {
        let l = 0
        let r = nums.length - 1

        while(l <= r){
            let m = Math.floor((l + r) / 2)

            if(target === nums[m]) return m

            if(nums[l] <= nums[m]){
                if(target > nums[m] || target < nums[l]){
                    l = m + 1
                } else {
                    r = m - 1
                }
            } else {
                if(target < nums[m] || target > nums[r]){
                    r = m - 1
                } else {
                    l = m + 1
                }
            }
        } 

        return -1
    }
}
