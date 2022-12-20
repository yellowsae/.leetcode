/*
 * @lc app=leetcode.cn id=784 lang=typescript
 *
 * [784] 字母大小写全排列
 */

// @lc code=start
function letterCasePermutation(s: string): string[] {
  // 回溯解题
  const res: string[] = []
  const backtrack = (str: string, index: number, current: string) => {

    // 递归终止条件
    if (current.length === str.length) {
      res.push(current)
      return
    }

    // 获取字符
    const char: string = str[index]
    if (char >= "0" && char <= "9") {
      backtrack(str, index + 1, current + char)
    } else {
      // char 为 字母
      // 遍历所有情况 
      backtrack(str, index + 1, current + char.toLowerCase())
      backtrack(str, index + 1, current + char.toUpperCase())
    }
  }

  backtrack(s, 0, "")
  return res
};
// @lc code=end

