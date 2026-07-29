class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */

    // receive an array of nums, with a num target
    // return an array with all the possible unique combinations

    // each num can be used multiple times
    // no specific order

    // nums = [2,5,6,9]
    // target = 9
    // BASE CASE    
    // if the current combination is equal
    // to target then add it to the res array



    combinationSum(nums, target) {
        let res = []

        function dfs(i, curr, total){
            if(total === target) {
                res.push([...curr])
                return
            }

            if(total > target || i >= nums.length){
                return
            }

            curr.push(nums[i])
            dfs(i, curr, total + nums[i])
            curr.pop()

            dfs(i + 1, curr, total)
        }

        dfs(0, [], 0)

        return res
    }
}
