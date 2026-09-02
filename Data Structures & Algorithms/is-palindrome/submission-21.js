class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphanumeric(char) {
        return (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        );
    }

    isPalindrome(s) {
        let newS = ""

        for(const c of s){
            if(this.isAlphanumeric(c)){
                newS += c.toLowerCase()
            }
        }

        let l = 0
        let r = newS.length - 1 

        while(l < r){
            if(newS[l] !== newS[r]) return false
            l++
            r--
        }

        return true
    }
}
