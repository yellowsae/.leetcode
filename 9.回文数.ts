/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {

  // 1. 负数不是回文数
  // 2. 个位数为0 的数不是回文数
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false
  }

  let s = String(x)
  let res = ''
  // 字符串反转 
  for (let i = s.length - 1; i >= 0; i--) {
    res = res + s[i]
  }
  // console.log(res, s)
  return res === s

};
// @lc code=end

