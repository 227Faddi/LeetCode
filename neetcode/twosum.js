class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    
    twoSum(nums, target) {
        const map = new Map()

        for(let i = 0; i < nums.length; i++){
            const num = nums[i]
            const compliment = target - num

            if(map.has(compliment)){
                return [map.get(compliment), i]
            } else{
                map.set(num, i)
            }
        }
    }
}
