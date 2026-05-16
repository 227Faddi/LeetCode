class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    // receive a sorted array that has been rotated
    // return the minimun value from the array

    findMin(nums) {
        return Math.min(...nums)
    }
}
