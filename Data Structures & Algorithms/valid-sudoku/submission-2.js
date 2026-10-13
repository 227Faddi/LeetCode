class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        for(let row = 0; row < 9; row++){
            let seen = new Set()
            for(let i = 0; i < 9; i++){
                const cell = board[row][i]
                if(cell === ".") continue
                if(seen.has(cell)) return false
                seen.add(cell)
            }
        }

        for(let col = 0; col < 9; col++){
            let seen = new Set()
            for(let i = 0; i < 9; i++){
                const cell = board[i][col]
                if(cell === ".") continue
                if(seen.has(cell)) return false
                seen.add(cell)
            }
        }

        let boxes = [
            [0, 0], [0, 3], [0, 6],
            [3, 0], [3, 3], [3, 6],
            [6, 0], [6, 3], [6, 6],
        ]

        
        for(const [rowS, colS] of boxes){
            let seen = new Set()
            for(let row = rowS; row < rowS + 3; row++){
                for(let col = colS; col < colS + 3; col++){
                    const cell = board[row][col]
                    if(cell === ".") continue
                    if(seen.has(cell)) return false
                    seen.add(cell)
                }
            }
        }

        return true
    }
}
