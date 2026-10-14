class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let count = 0
        const binary = n.toString(2)

        for(const num of `${binary}`){
            if(Number(num) === 1){
                count++
            }
        }

        return count
    }
}
