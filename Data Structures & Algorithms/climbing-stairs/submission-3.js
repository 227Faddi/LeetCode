class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let memo = new Map()

        memo.set(1, 1)
        memo.set(2, 2)

        function dp(n){
            if(memo.get(n)) return memo.get(n)
            memo.set(n, dp(n - 1) + dp(n - 2))
            return memo.get(n)
        }

        return dp(n)
    }
}
