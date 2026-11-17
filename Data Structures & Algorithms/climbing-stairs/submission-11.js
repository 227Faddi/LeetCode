class Solution {
    /**
     * @param {number} n
     * @return {number}
     */

    // receive an positive int
    // return the number of ways to climb
    // till n taking 1 or 2 steps at the time
    // find all different combinations of steps that reaches n
        
    // 1 + 1 = 2
    // 2 = 2

    // create an hashmap to store the computed result
    // calculate recurvesily one or two step at the time
    // the base case if when we reach n or surpass it
    // 1 + min(dp((1 step) + dp(2 step))
    // []

    climbStairs(n) {
        let cache = new Map()

        function dp(num){
            if(cache.has(num)) return cache.get(num)

            if(num === n) return 1
            if(num > n) return 0

            cache.set(num, dp(num + 1) + dp(num + 2))
            return cache.get(num)
        }

        return dp(0)
    }
}
