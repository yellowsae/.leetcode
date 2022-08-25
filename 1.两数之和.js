/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // 1. 建立映射表 
  const map = new Map();

  // 2.  循环 nums 
  for (let i = 0; i < nums.length; i++) {

    // 3. 取值 nums 的值
    const n = nums[i];

    // 4. 获取 与 n 匹配的值 
    const n2 = target - n

    // 5. 判断映射表中 有没有 和 n2 匹配的值 
    if (map.has(n2)) {
      // 如果有， 它们的下标 
      return [map.get(n2), i]
    } else { }
    // 如果没有 , 把 n 这个值添加到 映射表
    // key : 值  value: 下标  
    map.set(n, i)
  }
};
// @lc code=end

