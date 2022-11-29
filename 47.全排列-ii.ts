/*
 * @lc app=leetcode.cn id=47 lang=typescript
 *
 * [47] 全排列 II
 */

// @lc code=start
function permuteUnique(nums: number[]): number[][] {
  let res: number[][] = []

  // 2. 递归 & 回溯 函数 
  const dfs = (
    curr: number[],
    store: number[],
    arr: number[][],
    len: number
  ) => {
    // 6. 递归终止 
    if (curr.length === len) {
      arr.push(curr)
      return
    }

    // 3. 循环  store
    for (let i = 0; i < store.length; i++) {
      // 4. 去重 
      if (i > 0 && store[i] === store[i - 1]) continue

      // 5. 递归 & 回溯
      dfs(
        curr.concat(store[i]),
        store.slice(0, i).concat(store.slice(i + 1)),
        arr,
        len
      )
    }
  }

  // 1. 排序
  nums.sort((a, b) => a - b)
  dfs(
    [],
    nums,
    res,
    nums.length
  )
  return res
};
// @lc code=end

