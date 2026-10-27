class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {
        let l = 0
        let r = 0

        while(r < nums.length){
            if(nums[r] !== 0){
                let tmp = nums[l]
                nums[l] = nums[r]
                nums[r] = tmp
                l++ 
            }
            r++
        }
    }
}
