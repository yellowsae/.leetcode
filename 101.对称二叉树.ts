/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
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

function isSymmetric(root: TreeNode | null): boolean {

  // 递归 + 判断 

  const dfs = (l, r): boolean => {
    // 1. 判断几种情况
    if (l === null && r === null) {
      return true
    }
    if (l === null || r === null) {
      return false
    }
    if (l.val !== r.val) {
      return false
    }

    // 递归
    // 递归时传入的节点不同 
    // - 左节点的left 和右节点的right 相比 
    // - 左节点的right 和右节点的left 相比
    return dfs(l.left, r.right) && dfs(l.right, r.left)
  }


  // 调用 dfs 传入 左边 和 右边 子树
  return dfs(root.left, root.right)
};
// @lc code=end

