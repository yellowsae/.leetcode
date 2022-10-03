/*
 * @lc app=leetcode.cn id=65 lang=typescript
 *
 * [65] 有效数字
 */

// @lc code=start
function isNumber(s: string): boolean {

  // 1. 定义图 
  const graph = {
    0: { 'blank': 0, 'digit': 6, '.': 2, 'sign': 1 },
    1: { 'digit': 6, '.': 2 },
    2: { 'digit': 3 },
    3: { 'digit': 3, 'e': 4 },
    4: { 'digit': 5, 'sign': 7 },
    5: { 'digit': 5 },
    6: { 'digit': 6, '.': 3, 'e': 4 },
    7: { 'digit': 5 },
  }

  // 2. 定义状态
  let state = 0

  // 3. 循环字符串 
  for (let c of s.trim()) {
    // 4. 获取当前字符的类型,  转义
    if (c >= '0' && c <= '9') {
      c = 'digit'
    } else if (c === ' ') {
      c = 'blank'
    } else if (c === '+' || c === '-') {
      c = 'sign'
    } else if (c === 'e' || c === 'E') {
      c = 'e'
    }

    // 根据图 获取到下一个状态
    state = graph[state][c]
    if (state === undefined) return false
  }


  // 遍历结束 
  if (state === 3 || state === 5 || state === 6) {
    return true
  }
  return false
};
// @lc code=end

