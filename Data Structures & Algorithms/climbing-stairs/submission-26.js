class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if(n === 1) return 1
        if(n === 0) return 0

        let one = 1
        let two = 2

        for(let i = 2; i < n; i++){
            let tmp = two
            two = one + two
            one = tmp
        }

        return two
    }
}
