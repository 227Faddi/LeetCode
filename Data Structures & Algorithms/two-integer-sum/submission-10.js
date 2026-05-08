class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    // receive an array of nums
    // return an array containing the 2 indices of the nums that sum up to target
    // the 2 indices can't be the same num
    // nums = [3,5,6,4], target = 7
    // Output: [0,1]

    twoSum(nums, target) {
        let map = new Map()

        for(let i = 0; i < nums.length; i++){
            const curr = nums[i]
            const complementary = target - curr

            if(map.has(complementary)){
                return [map.get(complementary), i]
            } else {
                map.set(curr,  i)
            }
        }
    }
}
