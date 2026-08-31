class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let one = 0
        let two = 0

        for(const n of nums){
            let tmp = Math.max(n + one, two)
            one = two
            two = tmp
        }

        return two
    }
}
