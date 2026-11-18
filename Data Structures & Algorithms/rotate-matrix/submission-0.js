class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */

    /*
    So I'm going to receive a 2D array and my goal is to return the same array by modifying it in place and then rotate it by 90 degrees and then returning it.

    */
    rotate(matrix) {
        let l = 0
        let r = matrix.length - 1

        while(l < r){
            for(let i = 0; i < r - l; i++){
                let t = l
                let b = r

                let tmp = matrix[t][l + i]

                matrix[t][l + i] = matrix[b - i][l]
                matrix[b - i][l] = matrix[b][r - i]
                matrix[b][r - i] = matrix[t + i][r]
                matrix[t + i][r] = tmp
            }
            l++
            r--
        }
    }
}
