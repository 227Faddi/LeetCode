class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDisappearedNumbers(nums) {
        let missing = new Map()
        let res = []

        for(let i = 1; i <= nums.length; i++){
            missing.set(i, false)
        }

        for(let i = 0; i < nums.length; i++){
            missing.set(nums[i], true)
        }

        for(const [key, value] of missing){
            if(!value){
                res.push(key)
            }
        }

        return res
    }
}
