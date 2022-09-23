/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  // 使用 stack 

  let stack: string[] = [];

  let map = new Map<string, string>();

  map.set('(', ')')
  map.set('[', ']')
  map.set('{', '}')

  for (let i = 0; i < s.length; i++) {
    let c = s[i]

    // 当 map 有 c, 则 入栈
    if (map.has(c)) {
      stack.push(c)
    } else {
      // 当 map 没有 c 
      // 获取栈顶元素
      const top: string = stack[stack.length - 1]

      // 判断 栈顶元素 是否与 c 匹配
      if (map.get(top) === c) {
        // 匹配则出栈
        stack.pop()
      } else {
        return false
      }
    }
  }

  // 判断 stack 是否为空
  return stack.length === 0
};
// @lc code=end

