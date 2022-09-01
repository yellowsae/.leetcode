/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */

/**
 * 解题思路： 使用深度优先遍历， 在每次遍历的时候，
 *          记录当前节点的深度，并且比较当前节点的深度和最大深度的大小，
 *          如果当前节点的深度大于最大深度，则更新最大深度。
 */
var maxDepth = function (root) {
  // 1. 定义一个变量, 记录最大深度
  let res = 0


  // 2. 定义深度优先遍历的函数 
  const dfs = (n, l) => {
    if (!n) return

    // 增加优化 
    if (!n.left && !n.right) {
      res = Math.max(res, l)
      // console.log(n.val, l)
    }


    // 当每次访问一次节点时，深度加1
    dfs(n.left, l + 1)
    dfs(n.right, l + 1)
  }

  // 深度优先遍历
  dfs(root, 1)


  // 返回 最大深度 
  return res
};
// @lc code=end

