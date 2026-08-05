/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */

    guessNumber(n) {
        let low = 1
        let high = n

        while(low <= high){
            const m = Math.floor((low + high) / 2)

            if(guess(m) === 0){
                return m
            } else if(guess(m) === 1){
                low = m + 1
            } else {
                high = m - 1
            }
        }
    }
}
