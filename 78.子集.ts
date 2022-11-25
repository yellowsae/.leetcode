/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
  let res: number[][] = []

  // 定义递归函数 
  const backtrack = (path:number[], l, start) => {
    if (l === path.length) {
      res.push(path)
      return
    }
    // 循环 
    for (let i = start; i < nums.length; i++) {
      backtrack(path.concat(nums[i]), l, i + 1)
    }
  }

  for (let i = 0; i <= nums.length; i++) {
    backtrack([], i, 0)
  }

  return res
};
// @lc code=end

