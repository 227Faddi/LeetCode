class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        if(s[0] === "0") return 0

        let memo = new Array(s.length).fill(0)
        memo[0] = 1

        for(let i = 1; i < s.length; i++){
            if(s[i] !== "0"){
                memo[i] += memo[i - 1];
            }

            const twoDigit = Number(s[i - 1] + s[i]);
            if (twoDigit >= 10 && twoDigit <= 26) {
                memo[i] += i >= 2 ? memo[i - 2] : 1;
            }
        }

        return memo[s.length - 1]
    }
}
