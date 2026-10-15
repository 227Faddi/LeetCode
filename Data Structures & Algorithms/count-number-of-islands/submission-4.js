class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        // receive a 2d array with 0s and 1s
        // return the number of island (1s adjacent horizontally or vertically)

        // create a set to store visited cells
        // check all cells and visiting them, while staying inbound
        // augment the number of island once we find one
        // return the result

        let res = 0
        let visited = new Set()

        const ROWS = grid.length
        const COLS = grid[0].length

        function dfs(r, c){
            if(r < 0 || c < 0 || r >= ROWS || c >= COLS || visited.has(`${r},${c}`) || grid[r][c] !== "1") return

            visited.add(`${r},${c}`)
            dfs(r + 1, c)
            dfs(r - 1, c)
            dfs(r, c + 1)
            dfs(r, c - 1)
        }

        for(let r = 0; r < ROWS; r++){
            for(let c = 0; c < COLS; c++){
                if (grid[r][c] === "1" && !visited.has(`${r},${c}`)) {
                    dfs(r, c);
                    res++;
                }
            }
        }

        return res
    }
}
