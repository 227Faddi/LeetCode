class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let res = Math.max(...nums)

        let currMin = 1
        let currMax = 1

        for(const n of nums){
            if(n === 0){
                currMin = 1
                currMax = 1
                continue
            }

            let tmp = currMax * n
            currMax = Math.max(n, currMax * n, currMin * n)
            currMin = Math.min(n, tmp, currMin * n)

            res = Math.max(res, currMax, currMin)
        }

        return res
    }
}
