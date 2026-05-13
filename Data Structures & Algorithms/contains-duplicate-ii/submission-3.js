class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */

    // receive an array of nums
    // return a boolean indicating whether indices of a num present 2 times
    // is abs(i - j) <= k

    // Input: nums = [1,2,3,1], k = 3
    // Output: true
    // Input: nums = [2,1,2], k = 1
    // Output: false

    // an hash set to store the occurrences of each num and its index
    // while looping through the array i'll check if the number is already in the
    // hash set then calculate the abs of both indices and return if they are less or equal
    // than k

    containsNearbyDuplicate(nums, k) {
        const set = new Set()

        let l = 0
        let r = 0

        while(r < nums.length){
            if(Math.abs(l - r) > k){
                set.delete(nums[l])
                l += 1
            }
            
            if(set.has(nums[r])){
                return true
            }

            set.add(nums[r])
            r++
        }

        return false
    }
}
