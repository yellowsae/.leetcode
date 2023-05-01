/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * [22] 括号生成
 */

// @lc code=start
function generateParenthesis(n: number): string[] {
  let res: string[] = []

  const backtrack = (
    res: string[],
    str: string,
    l: number,
    r: number,
    n: number
  ) => {

    // 写终止条件 

    if (l > n || r > n || r > l) return

    if (l === n && r === n) {
      res.push(str)
      return
    }

    // left  括号 
    backtrack(
      res,
      str + "(",
      l + 1,
      r,
      n
    )

    // 添加 右括号 right
    backtrack(
      res,
      str + ")",
      l,
      r + 1,
      n
    )

  }

  backtrack(
    res,
    "",
    0,
    0,
    n
  )

  return res
};
// @lc code=end

