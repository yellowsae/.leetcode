/*
 * @lc app=leetcode.cn id=199 lang=typescript
 *
 * [199] 二叉树的右视图
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

function rightSideView(root: TreeNode | null): number[] {

  if (!root) return []

  const queue = [root]
  const res = []

  while (queue.length) {
    const length = queue.length
    let tempArr = []
    for (let i = 0; i < length; i++) {
      const node = queue.shift()
      tempArr.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    res.push(tempArr[tempArr.length - 1])
  }
  console.log(res)
  return res
};
// @lc code=end

