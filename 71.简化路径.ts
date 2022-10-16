/*
 * @lc app=leetcode.cn id=71 lang=typescript
 *
 * [71] 简化路径
 */

// @lc code=start
function simplifyPath(path: string): string {
  // 1. 定义栈 
  const stack: string [] = []
  // 2. 分割字符串  
  const paths = path.split('/')

  // 3. 遍历字符串
  for (let i = 0; i < paths.length; i++) {
    const p = paths[i]
    if (p === '..') {
      stack.pop()
    }else if (p && p !== '.' && p !== '') {
      stack.push(p)
    }
  }
  // 4. 拼接字符串 并且返回
  return '/' + stack.join('/')
};
// @lc code=end

