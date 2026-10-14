class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let res = []

        for(let i = 0; i <= n; i++){
            let count = 0
            for(const num of i.toString(2)){
                if(Number(num) === 1){
                    count++
                }
            }
            
            res[i] = count
        }

        return res
    }
}
