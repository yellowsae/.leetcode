/*
 * @lc app=leetcode.cn id=105 lang=typescript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (preorder.length === 0 && inorder.length === 0) return null

  // 创建树
  const root: TreeNode = new TreeNode(preorder[0])

  for (let i = 0; i < preorder.length; i++) {
    if (preorder[0] === inorder[i]) {
      // 拆分数组 
      const pre_left = preorder.slice(1, i + 1)
      const pre_right = preorder.slice(i + 1, preorder.length)

      const ino_left = inorder.slice(0, i)
      const ino_right = inorder.slice(i + 1, inorder.length)

      // 递归，接入树 
      root.left = buildTree(pre_left, ino_left)
      root.right = buildTree(pre_right, ino_right)
      break
    }
  }
  return root
};
// @lc code=end

