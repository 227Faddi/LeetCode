class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */

    // receive a grid 2d array
    // return how many island
    // islands are formed by ones close to each other
    // check for all the cells if the value is 1 and is not in the set
    // if the value is 1 then recursevly search for a possible path
    // up, left, down, right. continue the path, until i can't find any more land
    // add each cell in an hashset to not count them multiple times
    //ones we are done with a path increase the number of islands

    numIslands(grid) {
        let visited = new Set()
        let count = 0
        const ROWS = grid.length
        const COLS = grid[0].length

        function dfs(r, c){
            if(r < 0 || c < 0 || r >= ROWS || c >= COLS ||
            grid[r][c] === "0"){
                return
            }

            grid[r][c] = "0"

            dfs(r + 1, c)
            dfs(r - 1, c)
            dfs(r, c + 1)
            dfs(r, c - 1)
        }

        for(let r = 0; r < ROWS; r++){
            for(let c = 0; c < COLS; c++){
                if(grid[r][c] === "1"){
                    count++
                    dfs(r, c)
                }
            }
        }

        return count
    }
}
