class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map()

        for(let i = 0; i < nums.length; i++){
            const comp = target - nums[i]

            if(map.has(comp)){
                return [map.get(comp), i]
            } else {
                map.set(nums[i], i)
            }
        }
    }
}
