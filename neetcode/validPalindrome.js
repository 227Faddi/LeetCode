class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    // receive a string, case sensitive
    // ignore non alpha numeric charts
    // return a boolean
    // always a string, from 1 to 1k char

    isPalindrome(s) {
        const cleanS = (s) => {
            return s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")
        }

        const clean = cleanS(s)

        let l = 0
        let r = clean.length - 1

        while(l <= r){
            if(clean[l] === clean[r]){
                l++
                r--
            } else{
                return false
            }
        }

        return true
    }
}
