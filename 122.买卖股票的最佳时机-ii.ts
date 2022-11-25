/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  // 贪心算法 

  let profit = 0;

  // 思路： 当 当前 和 上一个 数大， 就说明有利润 
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit = profit + prices[i] - prices[i - 1];
    }
  }
  return profit;
};
// @lc code=end

