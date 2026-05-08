class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */

    // receive an array of nums sorted in ascending order
    // return the index of the target num inside the array 
    // return -1 otherwise
    // Input: nums = [-1,0,2,4,6,8], target = 4
    // Output: 3
    // create 2 pointers
    // run a loop until the pointer meet each others
    // return -1 if nothing was found
    // inside the loop - find the mid value and check if it's equal to target

    search(nums, target) { 
        let l = 0
        let r = nums.length -1

        while(l <= r){
            let mid = Math.floor((l + r) / 2)

            if(nums[mid] === target){
                return mid
            }

            if(nums[mid] < target){
                l = mid + 1
            } else if(nums[mid] > target){
                r = mid - 1
            }
        }

        return -1
    }
}
