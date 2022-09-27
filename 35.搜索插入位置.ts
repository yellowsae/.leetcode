/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  let res = nums.indexOf(target)
  if (res !== -1) {
    return res
  } else {
    // res == -1
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > target) {
        return i
      }
    }
    if (nums[nums.length - 1] < target) {
      return nums.length
    }
  }
};
// @lc code=end

