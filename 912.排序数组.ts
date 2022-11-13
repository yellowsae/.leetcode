/*
 * @lc app=leetcode.cn id=912 lang=typescript
 *
 * [912] 排序数组
 */

// @lc code=start
// function sortArray(nums: number[]): number[] {
//   直接使用 sort 排序
//   return nums.sort((a, b) => a - b);
// };





// 插入排序 
function sortArray(nums: number[]): number[] {
  for (let i = 1; i < nums.length; i++) {
    let temp = nums[i];
    let j = i
    while (j > 0) {
      // 判断大小 
      if (nums[j - 1] > temp) {
        // 替换
        nums[j] = nums[j - 1];
      } else {
        break
      }
      j--
    }
    // 替换 
    nums[j] = temp;
  }
  return nums;
};
// @lc code=end

