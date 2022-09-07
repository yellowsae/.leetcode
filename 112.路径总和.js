/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */

// 深度优先遍历 
var hasPathSum = function (root, targetSum) {
  if (!root) return false
  let res = false
  const dfs = (n, s) => {
    if (!n.left && !n.right && s === targetSum) {
      // console.log(n.val, s)
      res = true
    }

    if (n.left) dfs(n.left, s + n.left.val)
    if (n.right) dfs(n.right, s + n.right.val)
  }

  dfs(root, root.val)
  return res

};
// @lc code=end

