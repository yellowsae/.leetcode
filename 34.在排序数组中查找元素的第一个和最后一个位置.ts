/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start

// function searchFn(x: number, nums: number[]): number {
//   let left = 0
//   let right = nums.length

//   while (left < right) {

//     const mid = Math.floor((left + right) / 2)

//     if (nums[mid] >= x) {
//       // 1.1 如果中间值大于等于 x, 那么就在左边
//       right = mid
//     } else {
//       // 1.2 如果中间值小于 x, 那么就在右边
//       left = mid + 1
//     }
//   }
//   // 2. 返回 left
//   return left
// }


// function searchRange(nums: number[], target: number): number[] {
//   const l = searchFn(target, nums)
//   const r = searchFn(target + 1, nums) - 1
//   return l == r ? [-1, -1] : [l, r]
// };

function searchRange(nums: number[], target: number): number[] {
  function search(x): number {
    let left = 0
    let right = nums.length
    while (left < right) {
      const mid = Math.floor((left + right) / 2)
      if (nums[mid] >= x) {
        right = mid
      } else {
        left = mid + 1
      }
    }
    return left
  }
  const l = search(target)
  const r = search(target + 1)
  return l == r ? [-1, -1] : [l, r - 1]
};
// @lc code=end

