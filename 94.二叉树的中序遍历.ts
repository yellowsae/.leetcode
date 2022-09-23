/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * [94] 二叉树的中序遍历
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

//  function inorderTraversal(root: TreeNode | null): number[] {
//   // 递归
//   if (!root) return []
//   let res: number[] = [];

//   const inorder = (n: TreeNode | null) => {
//     if (!n) return

//     inorder(n.left)
//     console.log(n.val)

//     res.push(n.val)

//     inorder(n.right)
//   }

//   inorder(root)

//   return res
// };
function inorderTraversal(root: TreeNode | null): number[] {
  // 非递归
  if (!root) return []

  // 定义栈
  let stack: TreeNode[] = []

  let p: TreeNode = root

  let res: number[] = []
  // 4.循环 
  while (p || stack.length) {
    // 1. 把所有左节点全部入栈
    while (p) {
      stack.push(p)
      p = p.left
    }

    // 2. 出栈, 访问
    const n: TreeNode = stack.pop()
    // console.log(n.val)
    res.push(n.val)


    // 3. 把 n 的右节点入栈
    p = n.right
  }

  return res
};
// @lc code=end

