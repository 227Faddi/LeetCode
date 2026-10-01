class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false

        let count = new Map()
        for(let i = 0; i < s.length; i++){
            if(count.has(s[i])){
                count.set(s[i], count.get(s[i]) + 1)
            } else {
                count.set(s[i], 1)
            }
        }

        for(let i = 0; i < t.length; i++){
            if(count.has(t[i])){
                count.set(t[i], count.get(t[i]) - 1)
            } else {
                count.set(t[i], 1)
            }
        }

        for(const [k, v] of count){
            if(v !== 0) return false
        }

        return true
    }
}
