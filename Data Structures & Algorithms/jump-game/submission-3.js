class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let res = nums.length - 1

        for(let i = nums.length - 2; i >= 0; i--){
            if(i + nums[i] >= res){
                res = i
            }
        }

        return res === 0
    }
}
