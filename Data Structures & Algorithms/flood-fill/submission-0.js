class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */

    // receive a 2d array, and some integers
    // return the 2d array modified in base of the color of each cell

    // keep track of the original color
    // recursively check each direction starting from the main cell
    // if it has the original color then change it, and check again
    // modify the color
    // if it goes out of bound or the color is not the original return
    // once done, return the new image

    floodFill(image, sr, sc, color) {
        let visited = new Set()
        let original = image[sr][sc]

        function dfs(sr, sc){
            if(sr < 0 || sr >= image.length ||
            sc < 0 || sc >= image[0].length ||
            image[sr][sc] !== original ||
            visited.has(`${sr},${sc}`)) {
                return
            }

            visited.add(`${sr},${sc}`)
            image[sr][sc] = color
            dfs(sr + 1, sc)
            dfs(sr - 1, sc)
            dfs(sr, sc + 1)
            dfs(sr, sc - 1)
        }

        dfs(sr, sc)

        return image
    }
}
