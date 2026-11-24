class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        // base case i >= cost.length return 0
        // recursive relation cost[i] = cost[i] + Math.min(dp(i + 1), dp(i + 2))

        let cache = new Map()

        function dp(i){
            if(i >= cost.length) return 0
            if(cache.has(i)) return cache.get(i)
            
            cache.set(i, cost[i] + Math.min(dp(i + 1), dp(i + 2)))
            return cache.get(i)
        }


        return Math.min(dp(0), dp(1))
    }
}
