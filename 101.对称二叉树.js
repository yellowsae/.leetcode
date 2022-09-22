/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */




// 深度优先遍历 + 判断 + 递归 
var isSymmetric = function (root) {
  // 1.  深度优先遍历 
  const dfs = (l, r) => {

    // 2 判断 树
    if (l === null && r === null) {
      // 当递归遍历到 l && r 都为 null 时 为 true
      return true
    }

    // 判断 其中一个为 null  或者  遍历两个节点中的值 不等时 为 false
    if (l === null || r === null || l.val !== r.val) {
      return false
    }

    // 3. 递归
    // 3.1  递归时 左子树的.left  和  右子树的.right 相比 -> 因为对称 
    // 3.1  递归时 左子树的.right 和  右子树的.left 相比 -> 因为对称 
    return dfs(l.left, r.right) && dfs(l.right, r.left)
  }


  // call dfs()
  return dfs(root.left, root.right)
};

// @lc code=end

