/*
 * @lc app=leetcode.cn id=145 lang=typescript
 *
 * [145] 二叉树的后序遍历
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

// 递归
// function postorderTraversal(root: TreeNode | null): number[] {
//   if (!root) return []
//   let res: number[] = []
//   const postorder = (n: TreeNode | null) => {
//     // 左
//     if (n.left) postorder(n.left)

//     // 右
//     if (n.right) postorder(n.right)

//     // 根
//     // console.log(n.val)
//     res.push(n.val)
//   }

//   postorder(root)
//   return res
// };



// 非递归
function postorderTraversal(root: TreeNode | null): number[] {
  if (!root) return []
  let res: number[] = []
  let stack: TreeNode[] = [root]
  let outputStack: TreeNode[] = []
  while (stack.length) {
    const n = stack.pop()
    if (!n) return
    // console.log(n.val)
    // 把 先序输出的节点  push 到 outputStack 中
    outputStack.push(n)
    // 先左后右 -> 因为是后续 -> 反着来 
    if (n.left) stack.push(n.left)
    if (n.right) stack.push(n.right)
  }

  // 循环 倒叙输出 outputStack 
  while (outputStack.length) {
    const n = outputStack.pop()
    // console.log(n.val)
    res.push(n.val)
  }

  return res
};
// @lc code=end

