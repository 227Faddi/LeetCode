class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        let memo = new Array(amount + 1).fill(amount + 1)
        memo[0] = 0

        for(let i = 1; i <= amount; i++){
            for(const coin of coins){
                if((i - coin) >= 0){
                    memo[i] = Math.min(memo[i], 1 + memo[i - coin])
                }
            }
        }

        return memo[amount] === amount + 1 ? -1 : memo[amount]
    }
}
