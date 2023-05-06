/*
 * @lc app=leetcode.cn id=103 lang=typescript
 *
 * [103] 二叉树的锯齿形层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) return []
  let res: number[][] = [] // 结果集
  let temp: number[] = [] // 中间数组 
  let flag: boolean = true // 标志位  (判断是否从 左 -> 右 插入 )
  let queue: any[] = [root]

  while (queue.length) {
    let len: number = queue.length
    while (len--) {
      // 取值 
      const n = queue.shift()

      if (n.left) queue.push(n.left)
      if (n.right) queue.push(n.right)

      // 根据 flag 判断是从左 -> 右 还是 从右 -> 左 插入
      if (flag) {
        temp.push(n.val)
      } else {
        temp.unshift(n.val)
      }
    }
    // 在循环层数 结束时 把值添加 到 结果集中
    res.push(temp)
    temp = []
    // flag 取反
    flag = !flag
  }
  return res
};
// @lc code=end

