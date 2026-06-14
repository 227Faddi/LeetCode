class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    // receive a string
    // return a boolean indicating whether it's a palindrome or not
    // spaces don't count

    // lowercase all char of s and removing all spaces
    // reverse the string
    // return if the reversed s is equal to s


    isAlpha(c) {
        return (
            (c >= 'a' && c <= 'z') ||
            (c >= 'A' && c <= 'Z') ||
            (c >= '0' && c <= '9')
        );
    }

    isPalindrome(s) {
        let newS = ""

        for(let i = 0; i < s.length; i++){
            if(this.isAlpha(s[i])){
                newS += s[i].toLowerCase()
            }
        }

        return newS === newS.split('').reverse().join('')
    }
}
