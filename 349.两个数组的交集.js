/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// 解题思路 
// 1. 给 nums1 去重使用Set,  并转为Array 
// 2. 循环 nums1 -> filter 方法 ， 并且判断 nums2中是否具有nums1的元素 
var intersection = function (nums1, nums2) {

  // return [...new Set(nums1)].filter(item => new Set(nums2).has(item))


  // 这样写使用两个 Set , 内存开销大，可以使用 Array 中的 includes 方法去重
  return [...new Set(nums1)].filter(item => nums2.includes(item))
};
// @lc code=end

