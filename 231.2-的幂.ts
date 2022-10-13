/*
 * @lc app=leetcode.cn id=231 lang=typescript
 *
 * [231] 2 的幂
 */

// @lc code=start
// function isPowerOfTwo(n: number): boolean {
//   // 使用位运算 & 运算

//   // 2 的幂次方的二进制表示中只有一个 1

//   // 0         10000
//   // n - 1     01111
//   // ----------------
//   // &         00000  // 0 说明能够被 2 整除
//   return n > 0 && (n & (n - 1)) === 0
// };


function isPowerOfTwo(n: number): boolean {
  // 递归判断
  if (n === 1) return true
  if (n === 0) return false

  // 非2的幂
  if ((n % 2) !== 0) return false

  // 递归
  return isPowerOfTwo(n / 2)
};
// @lc code=end

