class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    tribonacci(n) {
        let tab = []

        tab[0] = 0
        tab[1] = 1
        tab[2] = 1

        for(let i = 3; i < n + 1; i++){
            tab[i] = tab[i - 3] + tab[i - 2] + tab[i - 1]
        }

        return tab[n]
    }
}
