class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */

    // receive a 2d array with integers
    // return an array of the integer in the matrix in a spiral order
    // so we are gonna explore all the outer cells and progressevly reach the center
    // have a visited set to keep track of visited cells
    // create a res array where to push the cells visited



    // [[1,2,3,4],[5,6,7,8],[9,10,11,12]]

    // [[1,2,3,4],
    // [5,6,7,8],
    // [9,10,11,12]]
    spiralOrder(matrix) {
        let res = []
        let l = 0;
        let r = matrix[0].length;
        let t = 0;
        let b = matrix.length;


        while(l < r && t < b){
            // l to r
            for(let i = l; i < r; i++){
                res.push(matrix[t][i])
            }
            t++
            // t to b
            for(let i = t; i < b; i++){
                res.push(matrix[i][r - 1])
            }
            r--

            if (!(l < r && t < b)) {
                break;
            }

            for (let i = r - 1; i >= l; i--) {
                res.push(matrix[b - 1][i]);
            }
            b--;
            for (let i = b - 1; i >= t; i--) {
                res.push(matrix[i][l]);
            }
            l++;
        }

        return res
    }
}
