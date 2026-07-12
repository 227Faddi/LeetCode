class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map()

        for(let i = 0; i < nums.length; i++){
            const complementary = target - nums[i]

            if(map.has(complementary)){
                return [map.get(complementary), i]
            } else {
                map.set(nums[i], i)
            }
        }
    }
}
