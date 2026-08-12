class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid) {
        let perimeter = 0
        let visited = new Set()
        const ROWS = grid.length
        const COLS = grid[0].length

        function dfs(r, c){
            if(visited.has(`${r},${c}`)) return

            if(r < 0 || c < 0 || r >= ROWS || c >= COLS || grid[r][c] !== 1){
                perimeter++
                return
            }

            visited.add(`${r},${c}`)

            dfs(r + 1, c)
            dfs(r - 1, c)
            dfs(r, c + 1)
            dfs(r, c - 1)

            return true
        }

        for(let r = 0; r < ROWS; r++){
            for(let c = 0; c < COLS; c++){
                if(grid[r][c] === 1){
                    dfs(r, c)
                }
            }
        }

        return perimeter
    }
}