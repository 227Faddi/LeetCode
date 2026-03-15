class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    twoSum(nums, target) {
        const map = new Map()

        for(let i = 0; i < nums.length; i++){
            const current = nums[i]
            const compliment = target - current

            if(map.has(compliment)){
                return [map.get(compliment), i]
            } else {
                map.set(current, i)
            }
        }
    }
}
