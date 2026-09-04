class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        let memo = new Array(s.length + 1).fill(-1)

        function dp(i){
            if (i === s.length) return 1;
            if(memo[i] !== -1) return memo[i]
            if(s[i] === "0") return 0

            let res = dp(i + 1)
            if(i + 1 < s.length && (s[i] === "1" || (s[i] === "2" && s[i + 1] < "7"))) {
                res += dp(i + 2)
            }
            memo[i] = res
            return res  
        }

        return dp(0)
    }
}
