class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = new Map()

        for(const s of strs){
            const sorted = s.split("").sort().join("")
            if(!res.has(sorted)){
                res.set(sorted, [])
            }
        }

        for(const s of strs){
            const sorted = s.split("").sort().join("")
            if(res.has(sorted)){
                res.get(sorted).push(s)
            }
        }

        return Array.from(res.values())
    }

    isAnagram(s, t) {
        if(s.length !== t.length) return false

        let map = new Map()

        for(const c of s){
            if(map.has(c)){
                map.set(c, map.get(c) + 1)
            } else {
                map.set(c, 1)
            }
        }

        for(const c of t){
            if(map.has(c)){
                map.set(c, map.get(c) - 1)
            } else {
                return false
            }
        }

        for(const [k, v] of map){
            if(v !== 0) return false
        }

        return true
    }
}
