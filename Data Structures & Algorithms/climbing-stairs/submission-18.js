class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let cache = new Map()

        function dp(i){
            if(cache.has(i)) return cache.get(i)
            if(i === n) return 1
            if(i > n) return 0

            cache.set(i, dp(i + 1) + dp(i + 2))
            return cache.get(i)
        }

        return dp(0)
    }
}
