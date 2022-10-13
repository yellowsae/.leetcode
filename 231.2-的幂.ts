/*
 * @lc app=leetcode.cn id=231 lang=typescript
 *
 * [231] 2 的幂
 */

// @lc code=start
function isPowerOfTwo(n: number): boolean {
  // 使用位运算 & 运算

  // 2 的幂次方的二进制表示中只有一个 1

  // 0         10000
  // n - 1     01111
  // ----------------
  // &         00000  // 0 说明能够被 2 整除
  return n > 0 && (n & (n - 1)) === 0
};
// @lc code=end

