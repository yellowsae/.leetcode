/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  let res = nums.indexOf(target)
  if (res !== -1) {
    // 如果找到了，直接返回
    return res
  } else {
    // res == -1
    // nums 里面没有 target时


    // 1. 当 target 比 nums 中任何一个小时，返回 比 target 大的那个数的索引
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > target) {
        return i
      }
    }

    // 2. 当 target 比 nums 中所有的数都大时，返回 nums.length
    if (nums[nums.length - 1] < target) {
      return nums.length
    }
  }
};
// @lc code=end

