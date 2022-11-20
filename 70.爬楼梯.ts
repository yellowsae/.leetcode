/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
// function climbStairs(n: number): number {
//   if (n === 1) return 1;
//   if (n === 2) return 2;
//   return climbStairs(n - 1) + climbStairs(n - 2);
// };
// 递归超时 



// 
function climbStairs(n: number): number {
  // 1. 定义存储数据的 dp 数组
  let memo: number[] = [];

  // 记录步数 
  memo[1] = 1;
  memo[2] = 2;

  // 3. 循环 n 次
  for (let i = 3; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }

  return memo[n]
};
// @lc code=end

