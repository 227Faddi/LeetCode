class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = board.length
        let cols = board[0].length

        for(let row = 0; row < 9; row++){
            let seen = new Set()

            for(let i = 0; i < 9; i++){
                const cell = board[row][i]
                if (cell === '.') continue;
                if (seen.has(cell)) return false;
                seen.add(cell)
            }
        }

        for(let col = 0; col < 9; col++){
            let seen = new Set()

            for(let i = 0; i < 9; i++){
                const cell = board[i][col]
                if (cell === '.') continue;
                if (seen.has(cell)) return false;
                seen.add(cell)
            }
        }

        for (let square = 0; square < 9; square++) {
            let seen = new Set();
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    let row = Math.floor(square / 3) * 3 + i;
                    let col = (square % 3) * 3 + j;
                    const cell = board[row][col];
                    if (cell === '.') continue;
                    if (seen.has(cell)) return false;
                    seen.add(cell);
                }
            }
        }

        return true;
    }
}
