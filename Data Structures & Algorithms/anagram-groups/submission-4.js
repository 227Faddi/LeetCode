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
}
