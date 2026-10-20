class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        let map = new Map()

        function dp(r, c){
            if(map.has(`${r},${c}`)) return map.get(`${r},${c}`)

            if(r < 0 || c < 0 || r >= m || c >= n) return 0
            if(r === m - 1 && c === n - 1) return 1

            map.set(`${r + 1},${c}`, dp(r + 1, c)) 
            map.set(`${r},${c + 1}`, dp(r, c + 1))
            return map.get(`${r + 1},${c}`) + map.get(`${r},${c + 1}`)
        }

        return dp(0, 0)
    }
}
