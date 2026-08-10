class Solution {
    /**
     * @param {string[]} words
     * @param {string} pref
     * @return {number}
     */
    prefixCount(words, pref) {
        let count = 0
        for(const w of words){
            if(w.startsWith(pref)){
                count++
            }
        }
        return count
    }
}
