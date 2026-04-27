class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let k = 0
        let r = 0

        while(r < nums.length){
            if(nums[r] !== val){
                nums[k] = nums[r]
                k++
            }
            r++
        }

        return k
    }
}
