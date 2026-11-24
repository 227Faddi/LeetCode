class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map()

        for(let i = 0; i < nums.length; i++){
            const num = nums[i]
            const miss = target - num

            if(map.has(miss)){
                return [map.get(miss), i]
            } else {
                map.set(num, i)
            }
        }
    }
}
