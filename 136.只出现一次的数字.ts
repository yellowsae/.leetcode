/*
 * @lc app=leetcode.cn id=136 lang=typescript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
// function singleNumber(nums: number[]): number {
//   // 使用异或 ^ 运算 
//   // 两个相同的数异或为0
//   // 0与任何数异或为任何数
//   let res: number = 0

//   // 循环进行异或的运算
//   nums.forEach(num => res ^= num)

//   return res
// };


function singleNumber(nums: number[]): number {
  // 使用 set 数据结构存储数据
  let set = new Set()
  nums.forEach(num => {
    if (set.has(num)) {
      set.delete(num)
    } else {
      set.add(num)
    }
  })
  return set.values().next().value
};
// @lc code=end

