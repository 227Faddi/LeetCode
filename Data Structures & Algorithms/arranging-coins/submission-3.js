class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    arrangeCoins(n) {
        let res = 0

        while(n - res > 0){
            res++
            n = n - res
        }

        return res 
    }
}
