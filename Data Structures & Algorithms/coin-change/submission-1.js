class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        let memo = new Map()

        function dp(amount){
            if(memo.get(amount)) return memo.get(amount)

            if(amount === 0) return 0

            let res = Infinity;
            for(const c of coins){
                if((amount - c) >= 0){
                    res = Math.min(res, 1 + dp(amount - c))
                }

            }

            memo.set(amount, res)
            return res
        }
        
        const min = dp(amount)
        return min === Infinity ? -1 : min
    }
}
