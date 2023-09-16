/*
 * @lc app=leetcode.cn id=77 lang=typescript
 *
 * [77] 组合
 */

// @lc code=start
function combine(n: number, k: number): number[][] {

  const res: number[][] = []

  const backtrack = (path: number[], n: number, k: number, startIndex: number) => {

    if (path.length === k) {
      res.push(path)
      return
    }

    for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
      // for (let i = startIndex; i <= n; i++) {
      backtrack(
        path.concat(i),
        n,
        k,
        i + 1
      )
    }
  }

  backtrack(
    [],
    n,
    k,
    1
  )

  return res

};
// @lc code=end

