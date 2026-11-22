class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        let cache = new Map()

        function dp(i){
            if(cache.has(i)) return cache.get(i)
            if(i >= cost.length) return 0

            cache.set(i, cost[i] + Math.min(dp(i + 1), dp(i + 2)))
            return cache.get(i)
        }
        
        return Math.min(dp(0), dp(1))
    }
}
