class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */

    // receive a number
    // receive an arrays of nums
    // [1,5,10] => 12
    // 
    coinChange(coins, amount) {
        let memo = new Map()

        function dp(a){
            if(a === 0) return 0
            if(memo.get(a)) return memo.get(a)

            let res = Infinity
            for(const coin of coins){
                if(a - coin >= 0){
                    res = Math.min(res, 1 + dp(a - coin))
                }
            }

            memo.set(a, res)
            return memo.get(a)
        }

        let min = dp(amount)
        return min === Infinity ? -1 : min
    }
}
