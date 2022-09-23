/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {


  let map = new Map()

  for (let i = 0; i < nums.length; i++) {
    let t = target - nums[i]

    // 如果 map 中存在 t
    if (map.has(t)) {
      return [map.get(t), i]
    }

    // 把 nums[i] 存入 map 中
    map.set(nums[i], i)
  }

};
// @lc code=end

