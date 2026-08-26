class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let memo = new Map()

        function dp(num){
            if(memo.get(num)) return memo.get(num)

            if(num === n) return 1
            if(num > n) return 0

            memo.set(num, dp(num + 1) + dp(num + 2))
            return memo.get(num)
        }

        return dp(0)
    }
}