class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let res = 0

        function count(l, r){
            while(l >= 0 && r < s.length && s[l] === s[r]){
                res++
                l--
                r++
            }
        }
        
        for(let i = 0; i < s.length; i++){
            let l = i
            let r = i

            count(l, r)
            
            l = i
            r = i + 1

            count(l, r)
        }

        return res
    }
}
