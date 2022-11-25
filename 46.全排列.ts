/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
function permute(nums: number[]): number[][] {
  let res: number[][] = []

  // 递归函数
  const backtrick = (path: number[]) => {
    // 递归终止 
    if (path.length === nums.length) {  // 当二者长度相等时，说明已经找到了一组排列
      res.push(path)
      return
    }
    // 循环 
    nums.forEach(n => {
      // 如果已经存在，跳过
      if (path.includes(n)) return
      // 递归-回溯 
      backtrick([...path, n])
    })
  }
  backtrick([])
  return res
};
// @lc code=end

