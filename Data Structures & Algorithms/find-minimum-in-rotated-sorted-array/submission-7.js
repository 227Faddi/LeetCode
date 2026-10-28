class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let res = nums[0]
        let l = 0
        let r = nums.length - 1

        while(l <= r){
            const m = Math.floor((l + r) / 2)

            if(nums[m] <= nums[r]){
                res = Math.min(res, nums[m])
                r = m - 1
            } else if(nums[m] >= nums[l]){
                res = Math.min(res, nums[l])
                l = m + 1
            } else {
                l = m + 1
            }
        }

        return res
    }
}
