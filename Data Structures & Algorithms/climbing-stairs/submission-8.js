class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let memo = new Array(n).fill(-1)

        function dp(i){
            if (i >= n) return i === n; 

            if(memo[i] !== -1) return memo[i]

            memo[i] = dp(i + 1) + dp(i + 2)
            return memo[i]
        }
        
        return dp(0)
    }
}
