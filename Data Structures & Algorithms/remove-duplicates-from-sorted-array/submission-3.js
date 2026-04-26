class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    // receive an array of nums
    // return the k unique elements after removing the duplicates in place
    // Input: nums = [2,10,10,30,30,30]
    // Output: [2,10,30]
    // loop into the array with 2 pointers
    // one start from i 0 and one from i 1
    // check if the 2 nums are equal
    // if equal remove the duplicate
    // increase both pointers

    removeDuplicates(nums) {
        let l = 1
        let r = 1

        while(r < nums.length){
            if(nums[r] !== nums[r - 1]){
                nums[l] = nums[r]
                l++
            }
            r++
        }

        return l
    }
}
