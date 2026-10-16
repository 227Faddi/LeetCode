class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let visited = new Set()

        for(const n of nums){
            if(visited.has(n)){
                return true
            } else {
                visited.add(n)
            }
        }

        return false
    }
}
