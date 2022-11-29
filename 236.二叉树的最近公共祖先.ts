/*
 * @lc app=leetcode.cn id=236 lang=typescript
 *
 * [236] 二叉树的最近公共祖先
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
/**
    思路： 类似于动态规划 

    一个函数  参数 root  p  q 
    考虑递归：只需要考虑一层 
    
    // 两个节点在 异侧
    // 两个节点都在 同侧 

    l = call(root.left, p, q)  // p,  q 都在 root.left 
    r = call(root.right, p, q) // p,  q 都在 root.right 

    // 边界情况
    1. root => null  直接返回null
    2. root === (p || q)  返回root   // 函数的如何返回， 区分 递归函数如何返回 

    出现的几种情况 
    left && right  =>  root
    !left && right =>  right
    left && !right =>  left  
    !left && !right => null   // 叶子节点

 */
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (!root) return null;
  // 判断节点返回数 
  if (root === p || root === q) return root

  // 递归左右子树 
  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)

  // 判断出现的情况
  if (left && right) return root
  if (!left && right) return right
  if (left && !right) return left
  return null
};
// @lc code=end

