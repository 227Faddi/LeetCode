class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    // an array of strings
    // and our goal is to return an array with sub arrays containint anagrams from the input

    // Input: strs = ["act","pots","tops","cat","stop","hat"]
    // Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

    // check the array, check which words are anagram and save them

    groupAnagrams(strs) {
        const hash = new Map()

        for(let i = 0; i < strs.length; i++){
            const sorted = strs[i].split("").sort().join("")
            const notSorted = strs[i]

            if(hash.has(sorted)){
                hash.get(sorted).push(notSorted)
                console.log(hash)
            } else {
                hash.set(sorted, [notSorted])
            }
        }

        return [...hash.values()]
    }
}
