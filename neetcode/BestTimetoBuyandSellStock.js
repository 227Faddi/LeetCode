class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */

  // [10,1,5,6,7,1]
  // 6

  // l
  // r

  maxProfit(prices) {
    let max = 0;

    let l = 0;
    let r = 1;

    while (r < prices.length) {
      if (prices[l] < prices[r]) {
        const profit = prices[r] - prices[l];
        max = Math.max(max, profit);
      } else {
        l = r;
      }

      r++;
    }

    return max;
  }
}
