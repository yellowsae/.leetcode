/*
 * @lc app=leetcode.cn id=111 lang=typescript
 *
 * [111] 二叉树的最小深度
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

// function minDepth(root: TreeNode | null): number {
//   // 深度优先遍历 
//   if (!root) return 0;
//   let res = 0
//   const dfs = (n, level) => {
//     if (!n) return
//     // 当前节点是叶子节点
//     if (!n.left && !n.right) {
//       return res = res ? Math.min(res, level) : level
//     }
//     dfs(n.left, level + 1)
//     dfs(n.right, level + 1)
//   }
//   dfs(root, 1)
//   return res
// };


function minDepth(root: TreeNode | null): number {
  // 深度优先遍历 
  if (!root) return 0;
  let queue: any = [[root, 1]]
  while (queue.length) {
    const [n, l] = queue.shift()
    if (!n.left && !n.right) {
      return l
    }

    if (n.left) queue.push([n.left, l + 1])
    if (n.right) queue.push([n.right, l + 1])
  }
};
// @lc code=end

