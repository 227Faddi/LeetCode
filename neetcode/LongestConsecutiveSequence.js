class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums)
        let max = 0

        for(let num of set){

            if(set.has(num - 1)){
                continue
            }

            let current = num
            let currentMax = 1

            while(set.has(current + 1)){
                current++
                currentMax++
            }

            max = Math.max(max, currentMax)
        }

        return max
    }
}
