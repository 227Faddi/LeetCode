class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    // receive an array of nums
    // return a new array format by a concatenation of the first array
    // Input: nums = [1,4,1,2]
    // Output: [1,4,1,2,1,4,1,2]

    // create a new array, and add nums two times
    getConcatenation(nums) {
        return [...nums, ...nums]
    }
}
