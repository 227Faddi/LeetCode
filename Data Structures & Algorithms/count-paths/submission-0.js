class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        let memo = new Map()

        function dfs(r, c){
            if(memo.has(`${r},${c}`)) return memo.get(`${r},${c}`)
            if(r === m - 1 && c === n - 1) return 1
            
            if (r >= m || c >= n) return 0;
            memo.set(`${r + 1},${c}`, dfs(r + 1, c))
            memo.set(`${r},${c + 1}`, dfs(r, c + 1))

            return memo.get(`${r + 1},${c}`) + memo.get(`${r},${c + 1}`)
        }

        return dfs(0, 0)
    }
}
