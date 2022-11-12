/*
 * @lc app=leetcode.cn id=13 lang=typescript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
function romanToInt(s: string): number {
  // 1. 定义罗马数字和整数的对应关系
  let obj = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  // 2. 定义 sum 结果 
  let sum: number = 0

  // 3. 遍历 s 
  for (let i = 0; i < s.length; i++) {
    // 4. 判断 s[i] 和 s[i + 1] 的大小 ？ 如果左边比右边大，那就和 sum 相减  ： 和 sum 相加
    if (obj[s[i]] < obj[s[i + 1]]) {
      sum -= obj[s[i]]
    } else {
      sum += obj[s[i]]
    }
  }
  return sum
};
// @lc code=end

