/*
 * @lc app=leetcode.cn id=144 lang=typescript
 *
 * [144] 二叉树的前序遍历
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

// 递归版 
// function preorderTraversal(root: TreeNode | null): number[] {
//   if (!root) return []
//   const res: number[] = []

//   const preorder = (n: TreeNode | null) => {
//     if (!n) return
//     // 根
//     // console.log(n.val)
//     res.push(n.val)
//     // 左 
//     if (n.left) preorder(n.left)
//     // 右
//     if (n.right) preorder(n.right)
//   }
//   preorder(root)
//   return res
// };



// 非递归
function preorderTraversal(root: TreeNode | null): number[] {
  if (!root) return []
  const res: number[] = []
  let stack: TreeNode[] = [root]
  while (stack.length) {
    // 取值
    const n = stack.pop()
    // console.log(n.val)
    res.push(n.val)
    // 先右后左
    if (n.right) stack.push(n.right)
    if (n.left) stack.push(n.left)
  }
  return res
};
// @lc code=end

