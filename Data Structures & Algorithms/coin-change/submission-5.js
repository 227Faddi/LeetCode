class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        let cache = new Map()

        function dp(amount){
            if(cache.has(amount)) return cache.get(amount)
            if(amount === 0) return 0

            let res = Infinity
            for(const c of coins){
                if(amount - c >= 0){
                    res = Math.min(res, 1 + dp(amount - c))
                }
            }

            cache.set(amount, res)
            return res
        }

        const min = dp(amount)
        return min === Infinity ? - 1 : min
    }
}
