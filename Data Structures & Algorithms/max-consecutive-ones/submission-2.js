class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let res = 0
        let curr = res
        for(const n of nums){
            if(n === 1){
                curr++
            } else {
                curr = 0
            }
            res = Math.max(res, curr)
        }

        return res
    }
}
