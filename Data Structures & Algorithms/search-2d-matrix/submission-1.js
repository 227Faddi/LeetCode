class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let t = 0
        let b = matrix.length - 1

        while(t <= b){
            const m = Math.floor((t + b) / 2)

            if(target < matrix[m][0]){
                b = m - 1
            } else if(target > matrix[m][matrix[0].length - 1]){
                t = m + 1
            } else{
                break
            }
        }

        if(!(t <= b)) return false

        const row = Math.floor((t + b) / 2)
        let l = 0
        let r = matrix[0].length - 1

        while(l <= r){
            const m = Math.floor((l + r) / 2)

            if(matrix[row][m] === target) return true
            
            if(target < matrix[row][m]){
                r = m - 1
            } else if(target > matrix[row][m]){
                l = m + 1
            }
        }

        return false
    }
}
