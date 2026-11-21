class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        const ROWS = matrix.length;
        const COLS = matrix[0].length;
        let rowS = new Set();
        let colS = new Set();

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (matrix[r][c] === 0) {
                    rowS.add(r)
                    colS.add(c)
                }
            }
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (rowS.has(r) || colS.has(c)) {
                    matrix[r][c] = 0
                }
            }
        }
    }
}