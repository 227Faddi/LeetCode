class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0
        let r = numbers.length - 1

        while(numbers[l] + numbers[r] !== target){
            if(numbers[l] + numbers[r] > target){
                r--
            } else{
                l++
            }
        }

        return [l + 1, r + 1]
    }
}
