class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map()

        for(const s of strs){
            let sortedS = s.split("").sort().join("")

            if(map.has(sortedS)){
                map.get(sortedS).push(s)
            } else {
                map.set(sortedS, [s])
            }
        }

        return [...map.values()]
    }
}
