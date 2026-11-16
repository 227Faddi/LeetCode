class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        let reversedN = 0
        for(let i = 0; i < 32; i++){
            reversedN = reversedN << 1
            let bit = n & 1
            reversedN = reversedN | bit
            n = n >>> 1
        }

        return reversedN >>> 0
    }
}
