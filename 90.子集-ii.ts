/*
 * @lc app=leetcode.cn id=90 lang=typescript
 *
 * [90] 子集 II
 */

// @lc code=start
function subsetsWithDup(nums: number[]): number[][] {


  // 1. 排序
  nums.sort((a, b) => a - b)

  const res: number[][] = []

  const backtrack = (path: number[], nums: number[], startIndex: number) => {

    // 每次递归都 添加 
    res.push([...path])

    // 判断
    // 当 startIndex 超过数组长度；也就是  nums.length === 0 时
    if (startIndex >= nums.length) {
      return
    }

    // 循环 
    for (let i = startIndex; i < nums.length; i++) {

      // 排序 后， 要判断：  解集 不能 包含重复的子集
      if (i > startIndex && nums[i] === nums[i - 1]) {
        continue
      }

      backtrack(
        path.concat(nums[i]),
        nums,
        i + 1
      )
    }

  }


  backtrack([], nums, 0)

  return res

};
// @lc code=end

