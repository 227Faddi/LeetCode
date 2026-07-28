class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let path = new Set()
        const ROWS = board.length
        const COLS = board[0].length

        function dfs(r, c, i){
            // check if we found all letters in word
            if(i === word.length) return true

            // check if cell is out of bound
            if(r < 0 || 
            c < 0 ||
            r >= ROWS ||
            c >= COLS ||
            board[r][c] !== word[i] ||
            path.has(`${r},${c}`)){
                return false
            }

            // valid cell, so we can add it to the path
            path.add(`${r},${c}`)
            // check each adjacent cell
            let res = dfs(r + 1, c, i + 1) || 
            dfs(r - 1, c, i+ 1) ||
            dfs(r, c + 1, i+1) ||
            dfs(r, c - 1, i+1)
            // remove cell from path to check others
            path.delete(`${r},${c}`)
            
            return res
        }

        // call the recurvise function for each cell
        for(let r = 0; r < ROWS; r++){
            for(let c = 0; c < COLS; c++){
                if(dfs(r, c, 0)) return true
            }
        }

        return false
    }
}
