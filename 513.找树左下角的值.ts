/*
 * @lc app=leetcode.cn id=513 lang=typescript
 *
 * [513] 找树左下角的值
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

function findBottomLeftValue(root: TreeNode | null): number {

  const queue = [root]

  let res: number = 0

  while (queue.length) {
    let len = queue.length
    for (let i = 0; i < len; i++) {
      // 出队
      const node = queue.shift()
      if (i === 0) {
        res = node.val
      }
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }


  return res


};
// @lc code=end

