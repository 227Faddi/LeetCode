class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let one = 1
        let two = 2

        if(n === 1) return 1

        for(let i = 2; i < n; i++){
            let tmp = two
            two = one + two
            one = tmp
        }

        return two
    }
}
