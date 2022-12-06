/*
 * @lc app=leetcode.cn id=93 lang=typescript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
function restoreIpAddresses(s: string): string[] {
  // res 
  let res: string[] = []

  // dfs 递归函数 
  const backtrack = (s: string, path: string[], start, res: string[]) => {
    // 6. 递归终止条件
    if (path.length === 4) {  // path 中 ip 存储满时
      if (start === s.length) {  // 当 start 是最后的位置时 
        res.push(path.join('.'))
      }
      return
    }

    // 1. 循环 递归 
    for (let i = 1; i <= 3; i++) {
      // 2 截取字符串 
      let c = s.substr(start, i)
      // 3. 转为 c 为数字 
      let num = parseInt(c, 10)

      // 4. 判断 c 是否合法 
      // - c.length > 1 保证 c 不为空
      // - c.charAt(0) === '0' 保证 c 不以 0 开头
      if (c.length > 1 && c.charAt(0) === '0' || num > 255) {
        break
      }

      // 5. 当截取的数字合法时 
      if (num >= 0 && num <= 255) {
        // 5.1 添加到 path 中
        path.push(c)
        // 5.2 递归 
        backtrack(
          s,
          path,
          start + i,  // 进行下一次递归 
          res
        )
        // 5.3  path.pop() 会将 path 中最后一个元素删除
        path.pop()
      }
    }
  }

  // 递归
  backtrack(
    s,  // 传入的字符串
    [], // 临时数组
    0,  // 开始的位置
    res // 结果数组
  )

  return res
};
// @lc code=end

