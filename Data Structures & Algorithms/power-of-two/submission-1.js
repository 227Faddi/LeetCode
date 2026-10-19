class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isPowerOfTwo(n) {
        if(n === 1) return true
        if(n % 2 === 1 || n < 1) return false
        return this.isPowerOfTwo(n / 2)
    }
}
