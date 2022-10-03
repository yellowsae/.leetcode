/*
 * @lc app=leetcode.cn id=417 lang=typescript
 *
 * [417] 太平洋大西洋水流问题
 */

// @lc code=start
function pacificAtlantic(heights: number[][]): number[][] {
  if (!heights || !heights[0]) return []

  const m = heights.length
  const n = heights[0].length

  let flow1 = Array.from({ length: m }, () => new Array(n).fill(false))
  let flow2 = Array.from({ length: m }, () => new Array(n).fill(false))


  const dfs = (r, c, flow) => {
    flow[r][c] = true;
    [[r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]].forEach(([nr, nc]) => {
      // 判断条件
      if (
        // 1. 不能越界
        nr >= 0 && nr < m &&
        nc >= 0 && nc < n &&
        // 2. 不能走回头路 
        !flow[nr][nc] &&
        // 3. 逆流而上
        heights[nr][nc] >= heights[r][c]
      ) {
        dfs(nr, nc, flow)
      }
    })
  }


  for (let i = 0; i < m; i++) {
    dfs(i, 0, flow1)
    dfs(i, n - 1, flow2)
  }

  for (let i = 0; i < n; i++) {
    dfs(0, i, flow1)
    dfs(m - 1, i, flow2)
  }
  let res: number[][] = []
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (flow1[r][c] && flow2[r][c]) {
        res.push([r, c])
      }
    }
  }
  return res
};
// @lc code=end

