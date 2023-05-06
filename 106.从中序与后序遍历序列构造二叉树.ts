/*
 * @lc app=leetcode.cn id=106 lang=typescript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (inorder.length === 0 && postorder.length === 0) return null
  const root = new TreeNode(postorder[postorder.length - 1])
  for (let i = 0; i < postorder.length; i++) {
    if (postorder[postorder.length - 1] === inorder[i]) {
      const ino_left = inorder.slice(0, i)
      const ino_right = inorder.slice(i + 1, inorder.length)

      const post_left = postorder.slice(0, i)
      const post_right = postorder.slice(i, postorder.length - 1)

      root.left = buildTree(ino_left, post_left)
      root.right = buildTree(ino_right, post_right)
      break
    }
  }
  return root
};
// @lc code=end

