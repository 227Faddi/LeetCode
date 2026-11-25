class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        if(s[0] === "0") return 0
        let memo = new Array(s.length + 1).fill(0)
        memo[0] = 1
        memo[1] = 1

        for(let i = 2; i < memo.length; i++){
            const oneDigit = Number(s[i - 1]);
            const twoDigits = Number(s[i - 2] + s[i - 1]);

            if (oneDigit >= 1 && oneDigit <= 9) {
                memo[i] += memo[i - 1];
            }

            if (twoDigits >= 10 && twoDigits <= 26) {
                memo[i] += memo[i - 2];
            }
        }

        return memo[memo.length - 1]
    }
}
