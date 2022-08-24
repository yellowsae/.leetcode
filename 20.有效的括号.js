/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 1. 创建一个栈
  const stack = [];
  // 优化代码 

  // 使用Map 建立映射表的关系 
  const map = new Map();

  // 设置 () 的映射 
  map.set('(', ')')
  map.set('{', '}')
  map.set('[', ']')


  // 2. 遍历字符串
  for (let i = 0; i < s.length; i++) {
    // 3. 获取字符串 
    let c = s[i];

    // 4. 判断是否是左括号
    if (
      // (c === "(") ||
      // (c === "[") ||
      // (c === "{")

      // 优化判断 
      map.get(c)
    ) {
      // 入栈
      stack.push(c);
    } else {
      // c 为 右括号 
      // 判断栈顶元素是否 与 c 匹配 
      const stackTop = stack[stack.length - 1]
      if (
        // (stackTop === "(" && c === ")") ||
        // (stackTop === "[" && c === "]") ||
        // (stackTop === "{" && c === "}")

        // 优化判断 
        map.get(stackTop) === c
      ) {
        // 出栈 
        stack.pop();
      } else {
        return false;
      }
    }
  }

  // 5. 返回栈是否为空
  return stack.length === 0;
};
// @lc code=end



// @after-stub-for-debug-begin
module.exports = isValid;
// @after-stub-for-debug-end
