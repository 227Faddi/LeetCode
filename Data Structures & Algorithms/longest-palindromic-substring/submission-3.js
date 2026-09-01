class Solution {
    /**
     * @param {string} s
     * @return {string}
     */

    // receive a string
    // return the longest palindrome substring
    // Input: s = "ababd"
    // Output: "bab" or "aba"
    // create an helper function to define if a string is palindrome or not
    // reverse the string and compare it to the original
    // if they are equal then return true

    // creating two pointers to define our substring
    // both start at index
    // check each substring and adjsut the pointers as needed
    // while using the helper function to check if it's the longest
    // store the longest and update it everytime we see a bigger one

    longestPalindrome(s) {
        let res = ""

        for(let i = 0; i < s.length; i++){
            let l = i
            let r = i

            while(l >= 0 && r < s.length && s[l] === s[r]){
                if((r - l + 1) > res.length){
                    res = s.slice(l, r + 1)
                }

                l--
                r++
            }

            l = i
            r = i + 1

            while(l >= 0 && r < s.length && s[l] === s[r]){
                if((r - l + 1) > res.length){
                    res = s.slice(l, r + 1)
                }

                l--
                r++
            }
        }   

        return res
    }
}
