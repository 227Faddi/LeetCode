class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0
        let r = numbers.length - 1

        while(l < r){
            const tot = numbers[l] + numbers[r]
            if(tot < target){
                l++
            } else if(tot > target){
                r--
            } else {
                return [l + 1, r + 1]
            }
        }
    }
}
