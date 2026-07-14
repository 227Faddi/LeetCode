class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    // receive a string
    // return whether is a palindrome or not
    // reads the same forward and backward
    // only take count of alpha numeric char , and remove all spaces

    // create 2 pointers
    // one at the start one at the end
    // check if the char at the 2 pointers are equal

    isAlpha(char){
        return /^[a-z0-9]$/i.test(char)
    }


    isPalindrome(s) {
        let l = 0
        let r = s.length - 1

        while(l < r){
            while(l < r && !this.isAlpha(s[l])){
                l++
            }

            while(l < r && !this.isAlpha(s[r])){
                r--
            }

            if(s[l].toLowerCase() === s[r].toLowerCase()){
                l++
                r--
            } else {
                return false
            }
        }

        return true
    }
}
