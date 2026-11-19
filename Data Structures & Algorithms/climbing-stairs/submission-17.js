class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let cache = new Map()

        function dp(i){
            if(cache.has(i)) return cache.get(i)
            if(i <= 1) return 1

            cache.set(i, dp(i - 1) + dp(i - 2))
            return cache.get(i)
        }

        return dp(n)
    }
}
