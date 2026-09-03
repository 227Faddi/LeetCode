class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let res = ""

        function isPalindrome(l, r){
            while(l >= 0 && r < s.length && s[l] === s[r]){
                if((r - l + 1) > res.length){
                    res = s.slice(l, r + 1)
                }
                l--
                r++
            }
        }

        for(let i = 0; i < s.length; i++){
            isPalindrome(i, i)
            isPalindrome(i, i + 1)
        }

        
        return res
    }
}
