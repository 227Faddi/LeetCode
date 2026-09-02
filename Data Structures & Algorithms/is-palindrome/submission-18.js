class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const newS = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
        let l = 0
        let r = newS.length - 1 

        console.log(newS)

        while(l < r){
            if(newS[l] !== newS[r]) return false
            l++
            r--
        }

        return true
    }
}
