/*
 * @lc app=leetcode.cn id=455 lang=typescript
 *
 * [455] 分发饼干
 */

// @lc code=start
function findContentChildren(g: number[], s: number[]): number {
  // 贪心算法 - 解题 
  // 1. 先对两个数组进行排序
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  // 2. 定义 一个变量为 符合的孩子数量
  let child = 0
  // 3. 循环 饼干数组 
  s.forEach((n) => {
    // 判断： 如果 饼干符合 孩子的 尺寸 
    if (n >= g[child]) {
      child++
    }
  })
  return child
};
// @lc code=end

