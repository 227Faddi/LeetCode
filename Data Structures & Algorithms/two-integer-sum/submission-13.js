class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map()

        for(let i = 0; i < nums.length; i++){
            let curr = nums[i]
            let comp = target - curr

            if(map.has(comp)){
                return [map.get(comp), i]
            } else {
                map.set(curr, i)
            }
        }
    }
}
