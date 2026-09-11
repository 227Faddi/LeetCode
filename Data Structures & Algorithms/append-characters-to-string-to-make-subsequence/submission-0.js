class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */

    // receive 2 strings 
    // detect and return the num of char needed
    // to make t become a subsequence of s
    // so t should be able to be made by removing 
    // elements or not while keeping same order
    // Input: s = "coaching", t = "coding"
    // Output: 4

    // iterate through the string and with 2 pointers
    // one on s and one on t
    // check if the char in t are in s and skip if not
    // go all the way until s is done
    // if we didn't found some char
    // return the amount of char left from t

    appendCharacters(s, t) {
        let l = 0
        let r = 0
        
        
        while(l < s.length && r < t.length){
            if(s[l] === t[r]){
                l++
                r++
            } else {
                l++
            }
        }

        return r === t.length ? 0 : t.length - r
    }
}
