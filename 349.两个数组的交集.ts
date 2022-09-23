/*
 * @lc app=leetcode.cn id=349 lang=typescript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
  let map = new Map()
  nums1.forEach(item => {
    map.set(item, true)
  })

  let res: number[] = []
  nums2.forEach(item => {
    if (map.has(item)) {
      // push
      res.push(item)
      // delete
      map.delete(item)
    }
  })

  return res
};
// @lc code=end

