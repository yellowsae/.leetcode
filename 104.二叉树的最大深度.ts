/*
 * @lc app=leetcode.cn id=104 lang=typescript
 *
 * [104] 二叉树的最大深度
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

function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;
  // 深度优先遍历 
  let res: number = 0;
  const dfs = (n, level) => {
    if (!n) return
    res = Math.max(res, level)

    // 左 
    dfs(n.left, level + 1)
    // 右 
    dfs(n.right, level + 1)
  }

  dfs(root, 1)
  return res
};
// @lc code=end

