class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    kthGrammar(n, k) {
        if (n === 1) return 0;
        
        let mid = Math.pow(2, n - 1) / 2;
        if (k <= mid) {
            return this.kthGrammar(n - 1, k);
        } else {
            return 1 - this.kthGrammar(n - 1, k - mid);
        }
    }
}
