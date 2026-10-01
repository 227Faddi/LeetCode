class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    // receive an array of ints
    // return a boolean indicating whether a number appear twice
    // Input: nums = [1, 2, 3, 3]
    // Output: true
    hasDuplicate(nums) {
        let set = new Set()

        for(const n of nums){
            if(set.has(n)){
                return true
            } else {
                set.add(n)
            }
        }

        return false
    }
}
