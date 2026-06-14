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

    isPalindrome(s) {
        const cleanS = s.replaceAll(/[^A-Za-z0-9]/g, "").toLowerCase()
        return cleanS === cleanS.split("").reverse().join("")
    }
}
