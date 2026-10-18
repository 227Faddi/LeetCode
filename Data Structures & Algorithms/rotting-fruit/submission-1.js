class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const ROWS = grid.length
        const COLS = grid[0].length

        let q = new Queue()
        let fresh = 0
        let time = -1

        for(let r = 0; r < ROWS; r++){
            for(let c = 0; c < COLS; c++){
                if(grid[r][c] === 2){
                   q.enqueue([r, c])
                } else if(grid[r][c] === 1){
                    fresh++
                }
            }  
        }

        if(fresh === 0) return 0

        while(!q.isEmpty()){
            let size = q.size()
            time++
            for(let i = 0; i < size; i++){
                const [r, c] = q.dequeue()

                const next = [[r + 1, c], [r - 1, c], [r, c + 1], [r, c - 1]]
                for(const [r, c] of next){
                    if(r >= 0 && c >= 0 && r < ROWS && c < COLS && grid[r][c] === 1){
                        grid[r][c] = 2
                        fresh--
                        q.enqueue([r, c])
                    }
                }
            }
        }

        return fresh === 0 ? time : -1
    }
}
