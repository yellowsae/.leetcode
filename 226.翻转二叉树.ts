/*
 * @lc app=leetcode.cn id=226 lang=typescript
 *
 * [226] 翻转二叉树
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

// function invertTree(root: TreeNode | null): TreeNode | null {
//   // 反转二叉树 

//   if (!root) return null;

//   // 使用数组解构 反转 + 递归 
//   [root.left, root.right] = [invertTree(root.right), invertTree(root.left)]

//   // 返回 递归后的 root
//   return root

// };




function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null

  // 递归 + 转换节点 
  // 1. 保存 右子树 
  const temp = root.right
  // 2. 右子树 = 左子树
  root.right = invertTree(root.left)
  // 3. 左子树 = 保存的右子树
  root.left = invertTree(temp)
  // 4. 返回 root
  return root
};
// @lc code=end

