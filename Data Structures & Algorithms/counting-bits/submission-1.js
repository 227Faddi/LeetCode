class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let res = []

        for(let i = 0; i <= n; i++){
            let count = 0
            let tmp = i

            for(let j = 0; j < 32; j++){
                const bit = tmp & 1
                if(bit === 1) {
                    count++
                }
                tmp = tmp >>> 1
            }

            res.push(count)
        }   

        return res
    }
}
