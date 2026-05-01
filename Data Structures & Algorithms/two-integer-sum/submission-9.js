class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    // receive an array of ints
    // return an array with the 2 indices of the nums that sum up to target
    // Input: nums = [3,4,5,6], target = 7
    // Output: [0,1]
    // check each value, and calculate the number we miss to reach the target
    // 7 - 3 = 4 
    // create an hashmap an store the current value as key an the index as value
    // for each iteration we can check if the complementary number is in the hashmap
    // if it's there then return the array with both indices
    // if not add the curr num to the hashmap

    twoSum(nums, target) {
        const map = new Map()

        for(let i = 0; i < nums.length; i++){
            const curr = nums[i]
            const complementary = target - curr

            if(map.has(complementary)){
                return [map.get(complementary), i]
            } else {
                map.set(curr, i)
            }
        }
    }
}
