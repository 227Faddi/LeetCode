class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    firstUniqChar(s) {
        let unique = new Map()

        for(let i = 0; i < s.length; i++){
            if(unique.has(s[i])){
                unique.set(s[i], unique.get(s[i]) + 1)
            } else{
                unique.set(s[i], 1)
            }
        }

        for (let i = 0; i < s.length; i++) {
            if (unique.get(s[i]) === 1) return i;
        }

        return -1
    }
}
