/*
 * @lc app=leetcode.cn id=100 lang=typescript
 *
 * [100] 相同的树
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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  // 1. 判断几种情况
  if (p === null && q === null) {
    return true
  }

  if (p === null || q === null) {
    return false
  }

  if (p.val !== q.val) {
    return false
  }

  // 递归
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};
// @lc code=end

