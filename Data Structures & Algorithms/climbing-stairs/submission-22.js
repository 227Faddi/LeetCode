class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let memo = new Array(n).fill(-1)
        memo[0] = 1
        memo[1] = 2

        for(let i = 2; i <= n; i++){
            memo[i] = memo[i - 1] + memo[i - 2]
        }

        return memo[n - 1]
    }
}
