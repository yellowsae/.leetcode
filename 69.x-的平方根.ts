/*
 * @lc app=leetcode.cn id=69 lang=typescript
 *
 * [69] x 的平方根 
 */

// @lc code=start
// function mySqrt(x: number): number {
//   for (let i = 0; i <= x; i++) {
//     if (i * i === x) return i
//     if (i * i > x) return i - 1
//   }
// };

function mySqrt(x: number): number {
  return x = Math.floor(Math.sqrt(x))
};
// @lc code=end

