class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0
        let left = 0
        let right = 1

        while(right < prices.length){
            // no entry if loose
            if(prices[left] > prices[right]){
                left = right
                right++
            } else{
                max = Math.max(max, (prices[right] - prices[left]))
                right++
            }
        }

        return max
    }
}
