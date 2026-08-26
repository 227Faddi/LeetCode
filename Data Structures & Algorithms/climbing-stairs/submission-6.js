class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let tab = new Array(n).fill(-1)

        function dp(num){
            if(tab[num] >= 0) return tab[num]

            if(num === n) return 1
            if(num > n) return 0

            tab[num] = dp(num + 1) + dp(num + 2)
            return tab[num]
        }

        return dp(0)
    }
}