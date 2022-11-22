/*
 * @lc app=leetcode.cn id=509 lang=typescript
 *
 * [509] 斐波那契数
 */

// @lc code=start
// function fib(n: number): number {
//   // 直接递归 
//   if (n <= 1) return n;
//   return fib(n - 1) + fib(n - 2);
//   // 递归 + 记忆化
//   // 时间复杂度： O(n^2)
// };


function fib(n: number): number {
  let dp: number[] = [0, 1]
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
  // 时间复杂度： O(n) ; 空间 ： O(1)
};
// @lc code=end

