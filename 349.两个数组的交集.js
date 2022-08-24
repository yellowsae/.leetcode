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
  // return [...new Set(nums1)].filter(item => nums2.includes(item))


  // 使用字典 Map 方式做题
  /**
    解题思路 ： 
      1. 使用字典建立一个映射关系，记录nums1 里的值 
      2. 遍历 nums2 遇到字典里的值就选出 ，并从字典中删除该值
 */
  // 1. 建立一个映射表 
  let map = new Map()

  // 2. 循环nums1 建立映射关系 
  nums1.forEach(item => {
    map.set(item, true);
  })

  // 3. 声明一个 res [] 
  let res = []

  // 4. 循环 nums2 ， 查找映射表中是否存在相同
  nums2.forEach(item => {
    // 5. 判断 nums2 中是否 有 num1 的值 
    if (map.get(item)) {
      // 6. 添加到 res
      res.push(item)
      // 7. 删除映射表中的 item 避免重复 
      map.delete(item)
    }
  })

  // 8. 最后 返回 res
  return res

};
// @lc code=end

