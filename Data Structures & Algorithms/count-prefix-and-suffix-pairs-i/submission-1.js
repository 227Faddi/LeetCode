class Solution {
    /**
     * @param {string[]} words
     * @return {number}
     */

    // receive an array of words
    
    // return a number with the total of prefix between 2 strings
    // Input: words = ["a","aba","ababa","aa"]
    // Output: 4

    isPrefixAndSuffix(w1, w2){
        const l1 = w1.length
        const l2 = w2.length

        if(l1 > l2) return false

        return w2.startsWith(w1) && w2.endsWith(w1);
    }

    countPrefixSuffixPairs(words) {
        let counter = 0 

        for(let i = 0; i < words.length; i++){
            for(let j = i + 1; j < words.length; j++){
                if(this.isPrefixAndSuffix(words[i], words[j])){
                    counter++
                }
            }
        }

        return counter
    }
}
